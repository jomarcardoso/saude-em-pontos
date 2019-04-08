package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Exercicio implements Serializable {

    private static final long serialVersionUID = -4290204383788655734L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Date data;

    @ManyToOne
    @JoinColumn(name = "atividade_fisica_id")
    private AtividadeFisica atividadeFisica;

    private Double duracao;

    private Double intensidade;

    private Usuario usuario;
}
