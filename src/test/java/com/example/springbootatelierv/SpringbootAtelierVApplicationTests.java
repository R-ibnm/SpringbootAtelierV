package com.example.springbootatelierv;

import com.example.springbootatelierv.Modele.VoitureController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class SpringbootAtelierVApplicationTests {

    @Autowired
    VoitureController voitureController;

    @Test
    void contextLoads() {
        assertThat(voitureController).isNotNull();
//on teste si l’instance du contrôleur a été créé et injectée avec succès

    }
}