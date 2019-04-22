package feevale.saude.dto;

import feevale.saude.entity.AtividadeFisica;
import feevale.saude.entity.Refeicao;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class AtividadeFisicaDTO implements Serializable {

    private static final long serialVersionUID = 5037832920439276196L;

    private Double gastoCalorico;
    private String nome;

    public AtividadeFisicaDTO() {}

    public AtividadeFisicaDTO(AtividadeFisica refeicao) {
        this.gastoCalorico = refeicao.getGastoCalorico();
        this.nome = refeicao.getNome();
    }
}
