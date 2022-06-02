package de.htw.inventur.repository;

import de.htw.inventur.entity.Object;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//Communication between Backend and Database
//Spring will automatically generate SQL from function-name
@Repository
public interface ObjectRepository extends JpaRepository<Object, Integer> {

    Object findById(int id);

    List<Object> findAllBySectionId(int sectionId);

    List<Object> findAll();
}
