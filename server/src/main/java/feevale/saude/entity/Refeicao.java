package feevale.saude.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Refeicao implements Serializable {

    private static final long serialVersionUID = -8580761754019166789L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    @OneToMany(mappedBy = "refeicao", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<RefeicaoAlimento> alimentosQuantidades = new ArrayList<>();

    private Date horario = new Date();

    @Transient
    private Double calorias;

    @Transient
    private Double acidificacao;

    @Transient
    private Double inflamatorio;


    public Double somaCalorias() {
        Double calorias = this.getAlimentosQuantidades().stream().map(RefeicaoAlimento::somaCalorias).reduce(0.0, (subtotal, element) -> subtotal + element);
        this.setCalorias(calorias);
        return calorias;
    }

    private Double somaQuantidadeAlimentos() {
        return this.getAlimentosQuantidades()
            .stream()
            .map(RefeicaoAlimento::getQuantidade)
            .reduce(0.0, (subtotal, element) -> subtotal + element);
    }

    public Double somaAcidificacao() {
        Double totalAcidificacao = this.getAlimentosQuantidades()
            .stream().map(RefeicaoAlimento::somaAcidificacao)
            .reduce(0.0, (subtotal, element) -> subtotal + element);

        Double acidificacao = (totalAcidificacao / this.somaQuantidadeAlimentos());
        this.setAcidificacao(acidificacao);
        return acidificacao;
    }

    public Double somaInflamatorio() {
        Double inflamatorio = this.getAlimentosQuantidades().stream().map(RefeicaoAlimento::somaInflamatorio).reduce(0.0, (subtotal, element) -> subtotal + element);
        this.setInflamatorio(inflamatorio);
        return inflamatorio;
    }
}
