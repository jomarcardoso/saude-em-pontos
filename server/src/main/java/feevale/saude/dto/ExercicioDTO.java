package feevale.saude.dto;

import feevale.saude.entity.Exercicio;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class ExercicioDTO implements Serializable {

    private static final long serialVersionUID = 5037832920439276196L;

    private Double duracao;
    private Date data;

    public ExercicioDTO() {}

    public ExercicioDTO(Exercicio exercicio) {
        this.duracao = exercicio.getDuracao();
        this.data = exercicio.getData();
    }
}
