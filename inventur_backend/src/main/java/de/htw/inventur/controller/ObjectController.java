package de.htw.inventur.controller;

import de.htw.inventur.entity.Object;
import de.htw.inventur.repository.ObjectRepository;
import de.htw.inventur.request.UpdateStateRequest;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
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

    @PostMapping("/add/object")
    public void addObject(@RequestBody Object object){objectRepository.save(object);}

    @PostMapping("/objects/{objectId}/updateState")
    public int updateState(@PathVariable("objectId") Integer objectId, @RequestBody UpdateStateRequest newState){
        if(newState.getState() != 1) objectRepository.updateLendDate(objectId, new Date());
        else objectRepository.deleteLendDate(objectId);

        return objectRepository.updateState(objectId, newState.getState());
    }

}
