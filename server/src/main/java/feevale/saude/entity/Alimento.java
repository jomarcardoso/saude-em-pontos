package feevale.saude.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Alimento implements Serializable {

    private static final long serialVersionUID = 1422724580502003230L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private Double calorias;
    private Double indiceGlicemico;
    private Double acidificacao;
    private String descricao;

    public Double getInflamatorio() {
        return (this.getCalorias() * this.getIndiceGlicemico() / 100);
    }
}
