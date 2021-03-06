package com.test.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BkpModelDto {
    String statement;
    String pgmvar1;
    String pgmvar2;
    String pgmvar3;
    String pgmvar4;
    String pgmvar5;
    String pgmvar6;
    String pgmvar7;
    String pgmvar8;
    String pgmvar9;
    String pgmvar10;
    Boolean hasCondition;
    String pgmvarForCondition;
    String condition;
    String conditionValue;
    Boolean isConditionValueNumber;
}
