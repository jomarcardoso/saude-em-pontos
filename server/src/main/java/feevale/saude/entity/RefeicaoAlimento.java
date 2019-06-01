package feevale.saude.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
//@IdClass(RefeicaoAlimento.class)
public class RefeicaoAlimento implements Serializable {

    private static final long serialVersionUID = 834275497859028056L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn
    @JsonBackReference
    private Refeicao refeicao;

    @ManyToOne
    @JoinColumn
    private Alimento alimento;

    private Double quantidade;
}
