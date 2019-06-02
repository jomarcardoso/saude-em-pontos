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
    public final static Double inflamatorioIdeal = 52.5;
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
    public Double calculaCaloriasTotal() {
        return this.refeicoes.stream().map(Refeicao::calculaCaloriasTotal).reduce(0.0, (subtotal, element) -> subtotal + element);
    }

//    @Override
//    public Double somaAcidificacaoDosAlimentos(List<RefeicaoAlimento> alimentosQuantidades) {
//        return alimentosQuantidades.stream().map(Alimento::getAcidificacao).reduce(0.0, (subtotal, element) -> subtotal + element);
//    }
//
//    @Override
//    public Double somaInflamatorioDosAlimentos(List<Alimento> alimentos) {
//        return alimentos.stream().map(Alimento::getInflamatorio).reduce(0.0, (subtotal, element) -> subtotal + element);
//    }
//
//    @Override
    public void gerarRelatorio() {
//        this.setAcidificacao(this.somaAcidificacaoDosAlimentos(this.alimentosQuantidades));
        this.setCalorias(this.calculaCaloriasTotal());
//        this.setInflamatorio(this.somaInflamatorioDosAlimentos(this.alimentosQuantidades));
    }


//    @ManyToOne
//    @JoinColumn(name = "usuario_id")
//    private Usuario usuario;
}
