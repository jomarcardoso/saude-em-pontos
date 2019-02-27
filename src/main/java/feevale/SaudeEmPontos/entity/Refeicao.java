package feevale.SaudeEmPontos.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Refeicao implements Serializable {

    private static final long serialVersionUID = -8580761754019166789L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @ManyToMany
    @JoinTable(
        name="refeicao_alimento",
        joinColumns={@JoinColumn(name="refeicao_id")},
        inverseJoinColumns={@JoinColumn(name="alimento_id")})
    private List<Alimento> alimentoEntidades = new ArrayList<>();
}
