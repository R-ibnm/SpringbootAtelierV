package com.example.springbootatelierv.Modele;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@DataJpaTest
class VoitureRepoTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    VoitureRepo voitureRepo;

    @Autowired
    ProprietaireRepo proprietaireRepo;
    @Test
    public void ajouterVoiture() {
        Proprietaire proprietaire1 = new Proprietaire("rim" , "ibnm");
        proprietaireRepo.save(proprietaire1);
        Voiture voiture = new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021, 180000,proprietaire1);
        entityManager.persistAndFlush(voiture);
//permet de faire persister ce tuple de l’entité Voiture
        assertThat(voiture.getId()).isNotNull();
//permet de tester qu'un tuple de Voiture a bien été ajoutée en mémoire H2
    }


    @Test
    public void supprimerVoiture() {
        Proprietaire proprietaire1 = new Proprietaire("rim" , "ibnm");
        proprietaireRepo.save(proprietaire1);
        entityManager.persistAndFlush(new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021,
                180000,proprietaire1 ));
        voitureRepo.deleteAll();
        List<Voiture> voitures = StreamSupport.stream(voitureRepo.findAll().spliterator(), false)
                .collect(Collectors.toList());

        assertThat(voitures.isEmpty());
//permet de tester si tous les tuples ont été supprimés
    }

}