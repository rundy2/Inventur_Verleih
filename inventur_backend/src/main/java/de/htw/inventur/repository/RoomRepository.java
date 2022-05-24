package de.htw.inventur.repository;

import de.htw.inventur.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Communication between Backend and Database
//Spring will automatically generate SQL from function-name
@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    Room findById(int roomId);
}
