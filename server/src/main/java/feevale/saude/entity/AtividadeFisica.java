package feevale.saude.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
public class AtvividadeFisica implements Serializable {

    private static final long serialVersionUID = -149222343768435772L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private Double gastoCalorico;
    private Double anaboloismo;
    private String descricao;
    private TipoAtividadeFisica tipo;
}
