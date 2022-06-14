package de.htw.inventur.repository;

import de.htw.inventur.entity.Object;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

//Communication between Backend and Database
//Spring will automatically generate SQL from function-name
@Repository
public interface ObjectRepository extends JpaRepository<Object, Integer> {

    Object findById(int id);

    List<Object> findAllBySectionId(int sectionId);

    List<Object> findAll();

    @Query("UPDATE Object o SET o.state = :newState WHERE o.id = :objectId")
    Object updateState(@Param("objectId") int objectId, @Param("newState") int newState);

    @Query("UPDATE Object o SET o.lendDate = :date WHERE o.id = :objectId")
    Object updateLendDate(@Param("objectId") int objectId, @Param("date") LocalDate date);

    @Query("UPDATE Object o SET o.lendDate = NULL WHERE o.id = :objectId")
    Object deleteLendDate(@Param("objectId")int objectId);
}
