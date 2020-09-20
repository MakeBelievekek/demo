package com.test.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilePathDto {
    String filePath;

    @Override
    public String toString() {
        return String.format("FilePathDto{filePath='%s'}", filePath);
    }
}
