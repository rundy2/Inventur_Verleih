package de.htw.inventur.controller;


import de.htw.inventur.entity.Section;
import de.htw.inventur.repository.SectionRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class SectionController {

    private SectionRepository sectionRepository;

    public SectionController(SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    @GetMapping("/room/{roomId}/storage/{storageId}/section")
    public List<Section> index(@PathVariable("roomId") Integer roomId, @PathVariable("storageId") Integer storageId){
        return sectionRepository.findAllByStorageId(storageId);
    }
}
