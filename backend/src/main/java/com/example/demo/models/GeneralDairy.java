package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class GeneralDairy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private GeneralDairyType generalDairyType;

    //feilds
    private String entryForOfficer;
    private String subject;
    private String generalDairyBrief;
    private String caseType;
    private String act;
    private String section;
    private Integer totalSanctionedStaff;
    private Integer totalConstables;
    private String otherForceDetails;

}
