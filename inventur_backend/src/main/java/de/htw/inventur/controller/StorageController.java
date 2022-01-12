package de.htw.inventur.controller;

import de.htw.inventur.entity.Storage;
import de.htw.inventur.repository.StorageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class StorageController {

    private StorageRepository storageRepository;

    public StorageController(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    @GetMapping("/room/{roomId}/storage")
    public List<Storage> index(@PathVariable("roomId") Integer roomId){
        return storageRepository.findAllByRoomId(roomId);
    }
}
