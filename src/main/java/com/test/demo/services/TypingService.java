package com.test.demo.services;

import com.test.demo.dto.MultiplePgmModelDto;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
@Service
@AllArgsConstructor
public class TypingService {
    private List<String> commands;

    public void typeDebugStart(MultiplePgmModelDto multiPgm) {
        System.setProperty("java.awt.headless", "false");
        commands = this.generateCommands(multiPgm, commands);
        log.warn("ez a command Array: " + commands);
        try {
            Robot robot = new Robot();
            robot.delay(5000);

            commands.forEach(com -> this.typeRacer(robot, com));
            /*
            byte[] bytes = multiPgm.getDebuggerModelList().get(0).getProgram().getBytes();
            robot.delay(5000);
            pressKey(robot, KeyEvent.VK_CAPS_LOCK);
            for (byte b : bytes) {
                int code = b;
                // keycode only handles [A-Z] (which is ASCII decimal [65-90])
                if (code > 96 && code < 123) code = code - 32;
                robot.delay(40);
                pressKey(robot, code);
            }STRDBG
            pressKey(robot, KeyEvent.VK_CAPS_LOCK);*/
        } catch (AWTException e) {

        }
        commands = Collections.emptyList();
    }

    private void pressKey(Robot robik, int commandKey) {
        robik.keyPress(commandKey);
        robik.keyRelease(commandKey);
    }

    private List<String> generateCommands(MultiplePgmModelDto multiPgm, List<String> commandList) {
        List<String> tempCommandList = new ArrayList<>(commandList);
        AtomicInteger counter = new AtomicInteger();
        multiPgm.getDebuggerModelList().forEach(debuggerModelDto -> {
            StringBuilder bkp = new StringBuilder();
            StringBuilder dspPgmVar = new StringBuilder();
            dspPgmVar.append("PGMVAR(");

            if (debuggerModelDto.getProgram() != null && debuggerModelDto.getProgram().length() > 0) {
                String tempProgram = debuggerModelDto.getProgram();
                boolean firstPgm = counter.get() == 0;
                tempCommandList.add(this.startOnlineDbgCommand(tempProgram, multiPgm.getBatch(), firstPgm));


                debuggerModelDto.getBkpList().forEach(bkpModelDto -> {
                    Boolean additionalVariableExists = false;


                    bkp.append(dbgStatement(bkpModelDto.getStatement(), tempProgram));

                    if (bkpModelDto.getPgmvar1() != null && bkpModelDto.getPgmvar1().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar1()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar2() != null && bkpModelDto.getPgmvar2().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar2()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar3() != null && bkpModelDto.getPgmvar3().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar3()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar4() != null && bkpModelDto.getPgmvar4().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar4()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar5() != null && bkpModelDto.getPgmvar5().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar5()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar6() != null && bkpModelDto.getPgmvar6().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar6()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar7() != null && bkpModelDto.getPgmvar7().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar7()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar8() != null && bkpModelDto.getPgmvar8().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar8()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar9() != null && bkpModelDto.getPgmvar9().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar9()));
                        additionalVariableExists = true;
                    }
                    if (bkpModelDto.getPgmvar10() != null && bkpModelDto.getPgmvar10().length() > 0) {
                        dspPgmVar.append(dbgVariable(bkpModelDto.getPgmvar10()));
                        additionalVariableExists = true;
                    }
                    if (additionalVariableExists) {
                        dspPgmVar.append(")");
                        bkp.append(dspPgmVar.toString());
                    }

                    additionalVariableExists = false;
                    bkp.append(" PGM(" + tempProgram + ")");

                    tempCommandList.add(bkp.toString());

                    bkp.setLength(0);
                    dspPgmVar.setLength(7);
                    log.info("ez a számláló te dummy: " + counter);
                    counter.getAndIncrement();
                });
            }
        });
        return tempCommandList;
    }


    private String startOnlineDbgCommand(String PGM, Boolean batch, boolean firstPgm) {
        String result = null;

        if (firstPgm) {
            result = "STRDBG(" + PGM + ")";
            log.warn("STR");
        } else {
            result = "ADDPGM(" + PGM + ")";
            log.warn("ADD");

        }
        return result;
    }

    private String dbgStatement(String statement, String PGM) {
        return "ADDBKP(" + statement + ") ";
    }

    private String dbgVariable(String variable) {
        return "(" + variable + " ()) ";
    }

    private void typeRacer(Robot robot, String command) {

        for (int i = 0; i < command.length(); i++) {
            char charToType = command.charAt(i);
            type(charToType, robot);
        }
        pressKey(robot, KeyEvent.VK_ENTER);
        robot.delay(300);

    }

    public void type(char character, Robot robot) {
        switch (character) {
            case 'a':
                doType(KeyEvent.VK_A, robot);
                break;
            case 'b':
                doType(KeyEvent.VK_B, robot);
                break;
            case 'c':
                doType(KeyEvent.VK_C, robot);
                break;
            case 'd':
                doType(KeyEvent.VK_D, robot);
                break;
            case 'e':
                doType(KeyEvent.VK_E, robot);
                break;
            case 'f':
                doType(KeyEvent.VK_F, robot);
                break;
            case 'g':
                doType(KeyEvent.VK_G, robot);
                break;
            case 'h':
                doType(KeyEvent.VK_H, robot);
                break;
            case 'i':
                doType(KeyEvent.VK_I, robot);
                break;
            case 'j':
                doType(KeyEvent.VK_J, robot);
                break;
            case 'k':
                doType(KeyEvent.VK_K, robot);
                break;
            case 'l':
                doType(KeyEvent.VK_L, robot);
                break;
            case 'm':
                doType(KeyEvent.VK_M, robot);
                break;
            case 'n':
                doType(KeyEvent.VK_N, robot);
                break;
            case 'o':
                doType(KeyEvent.VK_O, robot);
                break;
            case 'p':
                doType(KeyEvent.VK_P, robot);
                break;
            case 'q':
                doType(KeyEvent.VK_Q, robot);
                break;
            case 'r':
                doType(KeyEvent.VK_R, robot);
                break;
            case 's':
                doType(KeyEvent.VK_S, robot);
                break;
            case 't':
                doType(KeyEvent.VK_T, robot);
                break;
            case 'u':
                doType(KeyEvent.VK_U, robot);
                break;
            case 'v':
                doType(KeyEvent.VK_V, robot);
                break;
            case 'w':
                doType(KeyEvent.VK_W, robot);
                break;
            case 'x':
                doType(KeyEvent.VK_X, robot);
                break;
            case 'y':
                doType(KeyEvent.VK_Y, robot);
                break;
            case 'z':
                doType(KeyEvent.VK_Z, robot);
                break;
            case 'A':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_A, robot);
                break;
            case 'B':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_B, robot);
                break;
            case 'C':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_C, robot);
                break;
            case 'D':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_D, robot);
                break;
            case 'E':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_E, robot);
                break;
            case 'F':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_F, robot);
                break;
            case 'G':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_G, robot);
                break;
            case 'H':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_H, robot);
                break;
            case 'I':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_I, robot);
                break;
            case 'J':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_J, robot);
                break;
            case 'K':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_K, robot);
                break;
            case 'L':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_L, robot);
                break;
            case 'M':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_M, robot);
                break;
            case 'N':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_N, robot);
                break;
            case 'O':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_O, robot);
                break;
            case 'P':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_P, robot);
                break;
            case 'Q':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_Q, robot);
                break;
            case 'R':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_R, robot);
                break;
            case 'S':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_S, robot);
                break;
            case 'T':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_T, robot);
                break;
            case 'U':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_U, robot);
                break;
            case 'V':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_V, robot);
                break;
            case 'W':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_W, robot);
                break;
            case 'X':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_X, robot);
                break;
            case 'Y':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_Y, robot);
                break;
            case 'Z':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_Z, robot);
                break;
            case '`':
                doType(KeyEvent.VK_BACK_QUOTE, robot);
                break;
            case '0':
                doType(KeyEvent.VK_0, robot);
                break;
            case '1':
                doType(KeyEvent.VK_1, robot);
                break;
            case '2':
                doType(KeyEvent.VK_2, robot);
                break;
            case '3':
                doType(KeyEvent.VK_3, robot);
                break;
            case '4':
                doType(KeyEvent.VK_4, robot);
                break;
            case '5':
                doType(KeyEvent.VK_5, robot);
                break;
            case '6':
                doType(KeyEvent.VK_6, robot);
                break;
            case '7':
                doType(KeyEvent.VK_7, robot);
                break;
            case '8':
                doType(KeyEvent.VK_8, robot);
                break;
            case '9':
                doType(KeyEvent.VK_9, robot);
                break;
            case '-':
                doType(KeyEvent.VK_MINUS, robot);
                break;
            case '=':
                doType(KeyEvent.VK_EQUALS, robot);
                break;
            case '~':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_BACK_QUOTE, robot);
                break;
            case '!':
                doType(KeyEvent.VK_EXCLAMATION_MARK, robot);
                break;
            case '@':
                doType(KeyEvent.VK_AT, robot);
                break;
            case '#':
                doType(KeyEvent.VK_NUMBER_SIGN, robot);
                break;
            case '$':
                doType(KeyEvent.VK_DOLLAR, robot);
                break;
            case '%':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_5, robot);
                break;
            case '^':
                doType(KeyEvent.VK_CIRCUMFLEX, robot);
                break;
            case '&':
                doType(KeyEvent.VK_AMPERSAND, robot);
                break;
            case '*':
                doType(KeyEvent.VK_ASTERISK, robot);
                break;
            case '(':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_8, robot);
                break;
            case ')':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_9, robot);
                break;
            case '_':
                doType(KeyEvent.VK_UNDERSCORE, robot);
                break;
            case '+':
                doType(KeyEvent.VK_PLUS, robot);
                break;
            case '\t':
                doType(KeyEvent.VK_TAB, robot);
                break;
            case '\n':
                doType(KeyEvent.VK_ENTER, robot);
                break;
            case '[':
                doType(KeyEvent.VK_OPEN_BRACKET, robot);
                break;
            case ']':
                doType(KeyEvent.VK_CLOSE_BRACKET, robot);
                break;
            case '\\':
                doType(KeyEvent.VK_BACK_SLASH, robot);
                break;
            case '{':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_OPEN_BRACKET, robot);
                break;
            case '}':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_CLOSE_BRACKET, robot);
                break;
            case '|':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_BACK_SLASH, robot);
                break;
            case ';':
                doType(KeyEvent.VK_SEMICOLON, robot);
                break;
            case ':':
                doType(KeyEvent.VK_COLON, robot);
                break;
            case '\'':
                doType(KeyEvent.VK_QUOTE, robot);
                break;
            case '"':
                doType(KeyEvent.VK_QUOTEDBL, robot);
                break;
            case ',':
                doType(KeyEvent.VK_COMMA, robot);
                break;
            case '<':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_COMMA, robot);
                break;
            case '.':
                doType(KeyEvent.VK_PERIOD, robot);
                break;
            case '>':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_PERIOD, robot);
                break;
            case '/':
                doType(KeyEvent.VK_SLASH, robot);
                break;
            case '?':
                doType(KeyEvent.VK_SHIFT, KeyEvent.VK_SLASH, robot);
                break;
            case ' ':
                doType(KeyEvent.VK_SPACE, robot);
                break;
            default:
                throw new IllegalArgumentException("Cannot type character " + character);
        }
    }

    private void doType(int vk1, Robot robot) {
        robot.keyPress(vk1);
        robot.keyRelease(vk1);
    }

    private void doType(int vk1, int vk2, Robot robot) {
        robot.keyPress(vk1);
        robot.keyPress(vk2);
        robot.keyRelease(vk2);
        robot.keyRelease(vk1);
    }

}
