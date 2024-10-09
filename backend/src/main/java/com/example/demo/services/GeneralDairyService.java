package com.example.demo.services;

import com.example.demo.models.GeneralDairy;
import com.example.demo.repository.GeneralDairyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralDairyService {
    @Autowired
    private GeneralDairyRepository generalDairyRepository;

    public GeneralDairy saveGeneralDairy(GeneralDairy generalDairy) {
        return generalDairyRepository.save(generalDairy);
    }

    public List<GeneralDairy> getAllEntries() {
        return generalDairyRepository.findAll();
    }
}
