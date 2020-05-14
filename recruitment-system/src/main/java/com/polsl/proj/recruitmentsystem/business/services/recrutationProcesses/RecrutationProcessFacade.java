package com.polsl.proj.recruitmentsystem.business.services.recrutationProcesses;

import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RecrutationProcessFacade {

    private RecrutationProcessService recrutationProcessService;

    public List<RecrutationProcess> getAllRecrutationProcesses(String department) {
        return recrutationProcessService.getAllRecrutationProcesses(department);
    }
}
