package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
//@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Relatorio {
//public class Relatorio implements Serializable {

//    private static final long serialVersionUID = 2687565985384157705L;

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;

    public final static Double acidificacaoIdeal = 20.5;
    public final static Double inflamatorioIdeal = 0.35;
    public final static Double caloriasIdeal = 2000.0;

    private List<Refeicao> refeicoes = new ArrayList<>();

    private String dica;
    private Double calorias;
    private Double acidificacao;
    private Double inflamatorio;

    public Relatorio(List<Refeicao> refeicoes) {
        this.refeicoes = refeicoes;
    }

//    @Override
    private Double somaCalorias() {
        return this.refeicoes.stream().map(Refeicao::somaCalorias).reduce(0.0, (subtotal, element) -> subtotal + element);
    }

    private Double somaAcidificacao() {
        return this.refeicoes.stream().map(Refeicao::somaAcidificacao).reduce(0.0, (subtotal, element) -> subtotal + element);
    }

    private Double somaInflamatorio() {
        return this.refeicoes.stream().map(Refeicao::somaInflamatorio).reduce(0.0, (subtotal, element) -> subtotal + element);
    }

    private Double mediaInflamacaoPorCaloria() {
        return this.getInflamatorio() / this.getCalorias();
    }

    private String gerarDica() {
        String resposta = "";
        if (this.getCalorias() < Relatorio.caloriasIdeal) {
            resposta = resposta + "Certamente você está controlando seu peso";

            if (this.mediaInflamacaoPorCaloria() < Relatorio.inflamatorioIdeal) {
                resposta = resposta + ", e com saúde";
            } else {
                resposta = resposta + ", porém a qualidade dos seus alimentos não é ideal, eles podem causar vários danos a longo prazo, a melhor forma de melhorar isso é evitando os alimentos de alto índice glicêmico e praticar exercícios para compensar";
            }
        } else {
            resposta = resposta + "Cuidado com a injestão de calorias";
        }

        return resposta;
    }

    public void gerarRelatorio() {
        this.setAcidificacao(this.somaAcidificacao());
        this.setCalorias(this.somaCalorias());
        this.setInflamatorio(this.somaInflamatorio());
        this.setDica(this.gerarDica());
    }


//    @ManyToOne
//    @JoinColumn(name = "usuario_id")
//    private Usuario usuario;
}
