package de.htw.inventur.repository;

import de.htw.inventur.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//Communication between Backend and Database
//Spring will automatically generate SQL from function-name
@Repository
public interface SectionRepository extends JpaRepository<Section, Integer> {

    List<Section> findAllByStorageId(int storageId);

    Section findByName(String name);
}
