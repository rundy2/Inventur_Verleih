package de.htw.inventur.controller;

import de.htw.inventur.entity.Object;
import de.htw.inventur.entity.Room;
import de.htw.inventur.entity.Section;
import de.htw.inventur.entity.Storage;
import de.htw.inventur.repository.ObjectRepository;
import de.htw.inventur.repository.RoomRepository;
import de.htw.inventur.repository.SectionRepository;
import de.htw.inventur.repository.StorageRepository;
import de.htw.inventur.request.AddObjectRequest;
import de.htw.inventur.request.DeleteObjectRequest;
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
    private RoomRepository roomRepository;
    private StorageRepository storageRepository;
    private SectionRepository sectionRepository;

    private JwtTokenProvider jwtTokenProvider;

    public ObjectController(ObjectRepository objectRepository, JwtTokenProvider jwtTokenProvider, RoomRepository roomRepository, StorageRepository storageRepository, SectionRepository sectionRepository) {
        this.objectRepository = objectRepository;
        this.roomRepository = roomRepository;
        this.storageRepository = storageRepository;
        this.sectionRepository = sectionRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    //Get all objects from a special section
    @CrossOrigin(origins="*")
    @GetMapping("/room/{roomId}/storage/{storageId}/section/{sectionId}/object")
    public List<Object> index(@PathVariable("roomId") Integer roomId, @PathVariable("storageId") Integer storageId, @PathVariable("sectionId") Integer sectionId){
        return objectRepository.findAllBySectionId(sectionId);
    }

    //Get Object by Id
    @CrossOrigin(origins="*")
    @GetMapping("/objects/{objectId}")
    public Optional<Object> getObjectById(@PathVariable("objectId") Integer objectId){
        return objectRepository.findById(objectId);
    }

    //Get all objects
    @CrossOrigin(origins="*")
    @GetMapping("/objects")
    public List<Object> allObjects(){
        return objectRepository.findAll();
    }

    @CrossOrigin(origins="*")
    @PostMapping("/objects/user")
    public List<Object> getObjectsByUser(@RequestBody UserObjectsRequest userObjectsRequest){
        return objectRepository.findAllByLendBy(jwtTokenProvider.getUserMailFromToken(userObjectsRequest.getToken()));
    }

    //add object
    @CrossOrigin(origins="*")
    @PostMapping("/add/object")
    public int addObject(@RequestBody AddObjectRequest addObjectRequest){
        Room room = roomRepository.findByName(addObjectRequest.getRoom());
        Storage storage = storageRepository.findByName(addObjectRequest.getStorage());
        Section section = sectionRepository.findByName(addObjectRequest.getSection());

        if(room == null){
            Room newRoom = new Room();
            newRoom.setName(addObjectRequest.getRoom());
            roomRepository.save(newRoom);
            room = roomRepository.findByName(addObjectRequest.getRoom());
        }
        if(storage ==null){
            Storage newStorage = new Storage();
            newStorage.setRoomId(room.getId());
            newStorage.setName(addObjectRequest.getStorage());
            storageRepository.save(newStorage);
            storage = storageRepository.findByName(addObjectRequest.getStorage());
        }
        if(section == null){
            Section newSection = new Section();
            newSection.setRoomId(room.getId());
            newSection.setStorageId(storage.getId());
            newSection.setName(addObjectRequest.getSection());
            sectionRepository.save(newSection);
            section = sectionRepository.findByName(addObjectRequest.getSection());
        }

        Object newObject = new Object(addObjectRequest.getName(), section.getId(), storage.getId(), room.getId());
        newObject.setRoomName(addObjectRequest.getRoom());
        newObject.setStorageName(addObjectRequest.getStorage());
        newObject.setSectionName(addObjectRequest.getSection());

        objectRepository.save(newObject);
        return 1;
    }

    //update object state
    @CrossOrigin(origins="*")
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

    @CrossOrigin(origins="*")
    @PostMapping("/objects/{objectId}/delete")
    public int deleteObject(@RequestBody DeleteObjectRequest deleteObjectRequest){
        objectRepository.deleteByObjectId(deleteObjectRequest.getObjectId());

        return 1;
    }
}
