package com.test.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CodeLine {
    Integer lineNumber;
    String code;
    Integer statement;
    Integer order;
}
