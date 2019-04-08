package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AtividadeFisica implements Serializable {

    private static final long serialVersionUID = -149222343768435772L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private Double gastoCalorico;

    private Double anaboloismo;

    private String descricao;

    @ManyToOne
    @JoinColumn(name = "tipo_atividade_fisica_id")
    private TipoAtividadeFisica tipo;
}
