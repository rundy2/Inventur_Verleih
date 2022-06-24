package de.htw.inventur.controller;


import de.htw.inventur.entity.Section;
import de.htw.inventur.repository.SectionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Controller for sections
@RestController
@RequestMapping("/")
public class SectionController {

    private SectionRepository sectionRepository;

    public SectionController(SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    //Get all sections from a special storage
    @CrossOrigin(origins="*")
    @GetMapping("/room/{roomId}/storage/{storageId}/section")
    public List<Section> index(@PathVariable("roomId") Integer roomId, @PathVariable("storageId") Integer storageId){
        return sectionRepository.findAllByStorageId(storageId);
    }

    @CrossOrigin(origins="*")
    @PostMapping("/add/section")
    public void addSection(@RequestBody Section section){sectionRepository.save(section);}
}
