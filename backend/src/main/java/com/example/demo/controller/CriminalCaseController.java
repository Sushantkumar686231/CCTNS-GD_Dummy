package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CriminalCaseController {
    @GetMapping("/api/criminal-case-types")
    public List<String> getCaseTypes() {
        return Arrays.asList("Theft", "Assault", "Fraud", "Robbery");
    }

    @GetMapping("/api/acts")
    public List<String> getActs() {
        return Arrays.asList("IPC", "CrPC", "PMLA", "NDPS");
    }

    @GetMapping("/api/sections")
    public List<String> getSections() {
        return Arrays.asList("Section 420", "Section 302", "Section 376", "Section 498A");
    }
}
