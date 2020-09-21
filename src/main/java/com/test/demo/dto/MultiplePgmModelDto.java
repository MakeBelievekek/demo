package com.test.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MultiplePgmModelDto {
    List<DebuggerModelDto> debuggerModelList;
    Boolean batch;
}
