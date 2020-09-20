package com.test.demo.services;

import com.test.demo.dto.CodeDto;
import com.test.demo.dto.CodeLine;
import com.test.demo.dto.FilePathDto;
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
            while (line != null) {
                if (line.length() == 103) {
                    CodeLine codeLine = CodeLine.builder()
                            .lineNumber(line.substring(9, 15))
                            .code(line.substring(15,91))
                            .statement(line.substring(1, 7))
                            .build();
                    log.info(codeLine.toString());
                    codeDto.getCodeLines().add(codeLine);
                }
                line = br.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return codeDto;
    }
}
