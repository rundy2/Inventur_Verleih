package de.htw.inventur.controller;

import de.htw.inventur.entity.Object;
import de.htw.inventur.repository.ObjectRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Controller for objects
@RestController
@RequestMapping("/")
public class ObjectController {

    private ObjectRepository objectRepository;

    public ObjectController(ObjectRepository objectRepository) {
        this.objectRepository = objectRepository;
    }

    //Get all objects from a special section
    @GetMapping("/room/{roomId}/storage/{storageId}/section/{sectionId}/object")
    public List<Object> index(@PathVariable("roomId") Integer roomId, @PathVariable("storageId") Integer storageId, @PathVariable("sectionId") Integer sectionId){
        return objectRepository.findAllBySectionId(sectionId);
    }

    //Get all objects
    @GetMapping("/objects")
    public List<Object> allObjects(){
        return objectRepository.findAll();
    }

}
