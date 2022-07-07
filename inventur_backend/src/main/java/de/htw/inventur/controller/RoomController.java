package de.htw.inventur.controller;

import de.htw.inventur.entity.Room;
import de.htw.inventur.repository.RoomRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**Controller for rooms*/
//@CrossOrigin(origins="http://141.56.180.173:3000")
@RestController
@RequestMapping("/")
public class RoomController {

    private RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    /**Get all rooms*/
    @GetMapping("/room")
    public List<Room> index(){
        return roomRepository.findAll();
    }

    /**Get a special room*/
    @GetMapping("/room/{roomId}")
    public Room getRoom(@PathVariable("roomId") int roomId){
        return roomRepository.findById(roomId);
    }

    /**add room to database*/
    @PostMapping("/add/room")
    public void addRoom(@RequestBody Room room){roomRepository.save(room);}
}