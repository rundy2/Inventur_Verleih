package de.htw.inventur.repository;

import de.htw.inventur.entity.Object;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

//Communication between Backend and Database
//Spring will automatically generate SQL from function-name
@Repository
public interface ObjectRepository extends JpaRepository<Object, Integer> {

    Optional<Object> findById(int id);

    List<Object> findAllBySectionId(int sectionId);

    List<Object> findAll();

    @Query("SELECT o.lendBy FROM Object o WHERE o.id = :objectId")
    String getCurrentUserFromObject(@Param("objectId")int objectId);

    @Transactional
    @Modifying
    @Query("UPDATE Object o SET o.state = :newState WHERE o.id = :objectId")
    int updateState(@Param("objectId") int objectId, @Param("newState") int newState);

    @Transactional
    @Modifying
    @Query("UPDATE Object o SET o.lendDate = :date WHERE o.id = :objectId")
    int updateLendDate(@Param("objectId") int objectId, @Param("date") Date date);

    @Transactional
    @Modifying
    @Query("UPDATE Object o SET o.lendDate = NULL WHERE o.id = :objectId")
    int deleteLendDate(@Param("objectId")int objectId);

    @Transactional
    @Modifying
    @Query("UPDATE Object o SET o.lendBy = :user WHERE o.id = :objectId")
    int updateCurrentUser(@Param("objectId")int objectId, @Param("user")String user);

    @Transactional
    @Modifying
    @Query("UPDATE Object o SET o.lendBy = NULL WHERE o.id = :objectId")
    int deleteCurrentUser(@Param("objectId")int objectId);
}
