package com.test.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DebuggerModelDto {
    String program;
    List<BkpModelDto> bkpList;
}
