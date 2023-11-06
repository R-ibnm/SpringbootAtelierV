package com.example.springbootatelierv.Modele;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/voitures")
public class VoitureController {
    @Autowired
    private VoitureService voitureService;

    @GetMapping(path = "")
    public List<Voiture> getAllVoitures() {
        return voitureService.getAllVoitures();
    }

    @GetMapping(path = "/{id}")
    public Voiture getVoitureById(Integer id) {
        return voitureService.getVoitureById(id);
    }

    @PostMapping(path = "")
    public Voiture addVoiture(@RequestBody Voiture voiture) {
        return voitureService.addVoiture(voiture);
    }

    @PutMapping(path = "")
    public Voiture updateVoiture(@RequestBody Voiture voiture) {
        return voitureService.updateVoiture(voiture);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteVoiture(@PathVariable Integer id) {
        voitureService.deleteVoiture(id);
    }
}

