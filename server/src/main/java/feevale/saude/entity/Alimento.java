package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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
    private Double inflamatorio;
    private String descricao;

    @OneToMany(mappedBy = "alimento")
    private List<RefeicaoAlimento> alimentosQuantidades = new ArrayList<>();
}
