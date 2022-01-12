package de.htw.inventur.repository;

import de.htw.inventur.entity.Object;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ObjectRepository extends JpaRepository<Object, Integer> {

    List<Object> findAllBySectionId(int sectionId);
}
