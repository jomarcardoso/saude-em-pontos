package feevale.SaudeEmPontos.entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Double quantidade) {
        this.quantidade = quantidade;
    }

    public Double getCalorias() {
        return calorias;
    }

    public void setCalorias(Double calorias) {
        this.calorias = calorias;
    }

    public Double getIndiceGlicemico() {
        return indiceGlicemico;
    }

    public void setIndiceGlicemico(Double indiceGlicemico) {
        this.indiceGlicemico = indiceGlicemico;
    }

    public Double getPh() {
        return ph;
    }

    public void setPh(Double ph) {
        this.ph = ph;
    }
}
