package com.polsl.proj.recruitmentsystem.repositories;

import com.polsl.proj.recruitmentsystem.model.Recruit;
import com.polsl.proj.recruitmentsystem.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RecruitRepository  extends JpaRepository<Recruit,Integer> {

    @Query("SELECT r FROM Recruit r WHERE r.firstName = :firstName")
    int getByFirstName(String firstName);


    @Modifying
    @Transactional
    @Query("UPDATE Recruit r SET r.lastName = :newLastName WHERE r.firstName = :firstName")
    int updateLastNameForFirstName(@Param("firstName")String firstName, @Param("newLastName")String newLastName);

}
