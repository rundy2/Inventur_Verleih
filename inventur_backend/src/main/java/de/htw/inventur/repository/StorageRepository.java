package de.htw.inventur.repository;

import de.htw.inventur.entity.Storage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StorageRepository extends JpaRepository<Storage, Integer> {

    List<Storage> findAllByRoomId(int roomId);
}
