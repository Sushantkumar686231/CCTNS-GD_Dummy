package com.example.demo.controller;

import com.example.demo.models.GeneralDairy;
import com.example.demo.models.GeneralDairyType;
import com.example.demo.services.GeneralDairyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GeneralDairyController {
    @Autowired
    private GeneralDairyService generalDairyService;

    @GetMapping("/api/general-dairy-types")
    public GeneralDairyType[] getGeneralDairyTypes() {
        return GeneralDairyType.values();
    }

    @PostMapping("/api/general-dairy")
    public GeneralDairy addGeneralDairy(@RequestBody GeneralDairy generalDairy) {
        return generalDairyService.saveGeneralDairy(generalDairy);
    }

    @GetMapping("/api/general-dairy")
    public List<GeneralDairy> getAllGeneralDairyEntries() {
        return generalDairyService.getAllEntries();
    }

}
