package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Relatorio implements Serializable {

    private static final long serialVersionUID = 2687565985384157705L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String dica;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
