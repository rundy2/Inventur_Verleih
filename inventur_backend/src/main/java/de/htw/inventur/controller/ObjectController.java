package de.htw.inventur.controller;

import de.htw.inventur.entity.Object;
import de.htw.inventur.repository.ObjectRepository;
import de.htw.inventur.request.UpdateStateRequest;
import de.htw.inventur.request.UserObjectsRequest;
import de.htw.inventur.security.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

//Controller for objects
@RestController
@RequestMapping("/")
public class ObjectController {

    Logger logger = LoggerFactory.getLogger(ObjectController.class);

    private ObjectRepository objectRepository;
    private JwtTokenProvider jwtTokenProvider;

    public ObjectController(ObjectRepository objectRepository, JwtTokenProvider jwtTokenProvider) {
        this.objectRepository = objectRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    //Get all objects from a special section
    @GetMapping("/room/{roomId}/storage/{storageId}/section/{sectionId}/object")
    public List<Object> index(@PathVariable("roomId") Integer roomId, @PathVariable("storageId") Integer storageId, @PathVariable("sectionId") Integer sectionId){
        return objectRepository.findAllBySectionId(sectionId);
    }

    //Get Object by Id
    @GetMapping("/objects/{objectId}")
    public Optional<Object> getObjectById(@PathVariable("objectId") Integer objectId){
        return objectRepository.findById(objectId);
    }

    //Get all objects
    @GetMapping("/objects")
    public List<Object> allObjects(){
        return objectRepository.findAll();
    }

    @PostMapping("/objects/user")
    public List<Object> getObjectsByUser(@RequestBody UserObjectsRequest userObjectsRequest){
        return objectRepository.findAllByLendBy(jwtTokenProvider.getUserMailFromToken(userObjectsRequest.getToken()));
    }

    //add object
    @PostMapping("/add/object")
    public int addObject(@RequestBody Object object){objectRepository.save(object); return 1;}

    //update object state
    @PostMapping("/objects/{objectId}/updateState")
    public int updateState(@PathVariable("objectId") Integer objectId, @RequestBody UpdateStateRequest newState){
        String user = jwtTokenProvider.getUserMailFromToken(newState.getToken());

        if(newState.getState() != 1) { //if object state lend/reserved
            objectRepository.updateLendDate(objectId, new Date());
            objectRepository.updateCurrentUser(objectId, user);
        }
        else {
            if(user.compareTo(objectRepository.getCurrentUserFromObject(objectId)) != 0) return -1;
            objectRepository.deleteLendDate(objectId);
            objectRepository.deleteCurrentUser(objectId);
        }

        return objectRepository.updateState(objectId, newState.getState());
    }
}
