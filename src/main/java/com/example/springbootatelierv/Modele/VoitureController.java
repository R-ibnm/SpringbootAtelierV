package com.example.springbootatelierv.Modele;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VoitureController {
    @Autowired
    private VoitureRepo voitureRepo;
    @Autowired
    private ProprietaireRepo proprietaireRepo;
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/voitures")
    public Iterable<Voiture> getVoitures(){
        return voitureRepo.findAll();
    }

    public Voiture saveVoiture(Voiture voiture) {
        try {
            Voiture savedVoiture = voitureRepo.save(voiture);
            return savedVoiture;
        } catch (Exception e) {
            throw e; }
    }

    public Proprietaire saveProprietaire(Proprietaire proprietaire) {
        try {
            Proprietaire savedProprietaire = proprietaireRepo.save(proprietaire);
            return savedProprietaire;
        } catch (Exception e) {
            throw e;  }
    }

}
