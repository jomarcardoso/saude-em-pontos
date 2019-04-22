package feevale.saude.dto;

import feevale.saude.entity.Refeicao;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class RefeicaoDTO implements Serializable {

    private static final long serialVersionUID = 5037832920439276196L;

    private Date horario;
    private String nome;

    public RefeicaoDTO() {}

    public RefeicaoDTO(Refeicao refeicao) {
        this.horario = refeicao.getHorario();
        this.nome = refeicao.getNome();
    }
}
