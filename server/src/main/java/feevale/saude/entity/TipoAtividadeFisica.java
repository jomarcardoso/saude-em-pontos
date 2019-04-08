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
@AllArgsConstructor
public class TipoAtividadeFisica implements Serializable {

    private static final long serialVersionUID = 2885899378309916909L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String nomeIntensidade;
    private Double multiplicadorIntensidade;
}
