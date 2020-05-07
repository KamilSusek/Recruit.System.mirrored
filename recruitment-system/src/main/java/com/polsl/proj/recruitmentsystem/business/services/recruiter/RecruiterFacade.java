package com.polsl.proj.recruitmentsystem.business.services.recruiter;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.business.utils.file.FileUtility;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.NoSuchElementException;

@Component
@AllArgsConstructor
public class RecruiterFacade {

    // Autowired jest wymagany dla POSTMAN / INSOMNIA  up: final tez dziala
    private final FileUtility fileUtils;
    private final RecruiterService service;

    public void addNewApplication(RecruitDTO recruitDTO, InputRecruitAttributesDTO attributesDTO) {
       service.addNewApplication(recruitDTO,attributesDTO);
    }
    public void addTraining(TrainingPOJO dto) {
        service.addTraining(dto);
    }
    public Recruiter findByName(String name) {
        try {
            Recruiter result = service.findByName(name);
            return result;
        } catch (NoSuchElementException exception) {
            return null;
        }
    }

    public void saveFile(MultipartFile file) throws Exception {
        fileUtils.save(file, 0);
    }

    public List<JobOutDTO> findAllMatchingRecruits(SearchParametersFINAL dto) {
       return service.findAllMatching(dto);
    }


    public List<EmployeeDTO> getAllRecruiters() {
       return  service.getAllRecruiters();
    }
}
