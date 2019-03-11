package feevale.SaudeEmPontos.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Getter @Setter
@Entity
public class Alimento implements Serializable {

    private static final long serialVersionUID = 1422724580502003230L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private Double quantidade;

    private Double calorias;

    private Double indiceGlicemico;

    private Double ph;

    public Alimento() {
    }

    public Alimento(Integer id, String nome, Double quantidade, Double calorias, Double indiceGlicemico, Double ph) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.calorias = calorias;
        this.indiceGlicemico = indiceGlicemico;
        this.ph = ph;
    }
}
