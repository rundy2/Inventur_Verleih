package de.htw.inventur.controller;

import de.htw.inventur.entity.Storage;
import de.htw.inventur.repository.StorageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Controller for storages
//@CrossOrigin(origins="http://141.56.180.173:3000")
@RestController
@RequestMapping("/")
public class StorageController {

    private StorageRepository storageRepository;

    public StorageController(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    //Get all storages from a special room
    @GetMapping("/room/{roomId}/storage")
    public List<Storage> index(@PathVariable("roomId") Integer roomId){
        return storageRepository.findAllByRoomId(roomId);
    }

    @PostMapping("/add/storage")
    public void addStorage(@RequestBody Storage storage){storageRepository.save(storage);}
}
