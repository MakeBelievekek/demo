package com.test.demo.services;

import com.test.demo.dto.CodeDto;
import com.test.demo.dto.FilePathDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class FileHandlerService {
    public CodeDto getCoblist(FilePathDto filePath) {
   /*     try (BufferedReader br = new BufferedReader(new FileReader(filePath.getFilePath()))) {
            String line = br.readLine();
            while (line != null) {
                // TODO: 9/19/2020 parsing
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
   */

        return new CodeDto();
    }
}
