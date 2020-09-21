package com.test.demo.controller;

import com.test.demo.dto.MultiplePgmModelDto;
import com.test.demo.services.TypingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/debug")
public class DebuggerControler {
    private final TypingService typingService;

    @PostMapping("/online")
    public ResponseEntity startOnlinePGMDebug(@RequestBody MultiplePgmModelDto multiPgm) throws AWTException {
        log.warn(multiPgm.toString());
        this.typingService.typeDebugStart(multiPgm);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
