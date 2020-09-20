package com.test.demo.services;

import com.test.demo.dto.CodeDto;
import com.test.demo.dto.CodeLine;
import com.test.demo.dto.FilePathDto;
import com.test.demo.dto.TraceDto;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

@Slf4j
@AllArgsConstructor
@Service
public class FileHandlerService {


    public CodeDto getCoblist(FilePathDto filePath) {
        CodeDto codeDto = new CodeDto();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath.getFilePath()))) {
            String line = br.readLine();
            boolean startRecording = false;

            while (line != null) {
                int length = line.length();
                CodeLine codeLine = new CodeLine();
                if (length == 131) {
                    line = br.readLine();
                    length = line.length();
                }
                if (!startRecording && length > 6 && line.startsWith("STMT", 3)) {
                    startRecording = true;
                }
                if (length > 6 && line.startsWith("STMT", 3)) {
                    line = br.readLine();
                    length = line.length();
                }
                if (startRecording) {
                    if (length > 5) {
                        if (line.substring(1, 7).trim().length() > 0) {
                            codeLine.setStatement(Integer.valueOf(line.substring(1, 7).trim()));
                        } else {
                            codeLine.setStatement(null);
                        }
                    }
                    if (length > 14) {
                        codeLine.setLineNumber(line.substring(9,15));
                    }
                    if (length > 89) {
                        codeLine.setCode(line.substring(15, 90));
                    } else if (length > 14) {
                        codeLine.setCode(line.substring(15, length));
                    }
                    codeDto.getCodeLines().add(codeLine);
                }

                line = br.readLine();

            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return codeDto;
    }

    public CodeDto getTrace(FilePathDto filePath) {
        CodeDto codeDto = new CodeDto();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath.getFilePath()))) {
            String line = br.readLine();

            while (line != null) {
                if (line.length() == 77 && !line.startsWith(".", 19)) {
                    TraceDto traceDto = TraceDto.builder()
                            .statement(Integer.valueOf(line.substring(19, 26).trim()))
                            .orderNumber(Integer.valueOf(line.substring(70, 77).trim()))
                            .build();
                    codeDto.getTraceList().add(traceDto);
                }
                line = br.readLine();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return codeDto;
    }
}
