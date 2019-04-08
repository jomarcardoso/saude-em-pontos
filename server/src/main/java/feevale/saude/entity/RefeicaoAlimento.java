package feevale.saude.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class RefeicaoAlimento implements Serializable {

    private static final long serialVersionUID = 834275497859028056L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Id
    @ManyToOne
    @JoinColumn(name = "refeicao_id", referencedColumnName = "id")
    private Refeicao refeicao;

    @Id
    @ManyToOne
    @JoinColumn(name = "alimento_id", referencedColumnName = "id")
    private Alimento alimento;

    private Double quantidade;
}
