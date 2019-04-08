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
public class Meta implements Serializable {

    private static final long serialVersionUID = 4180920442248308244L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Date data;

    private Double peso;

    private Double circunferenciaQuadril;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}