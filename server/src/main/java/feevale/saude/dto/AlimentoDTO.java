package feevale.saude.dto;

import feevale.saude.entity.Alimento;
import lombok.Data;

import java.io.Serializable;

@Data
public class AlimentoDTO implements Serializable {

    private static final long serialVersionUID = 5037832920439276196L;

    private Integer id;
    private Double calorias;
    private String nome;

    public AlimentoDTO() {}

    public AlimentoDTO(Alimento alimento) {
        this.id = alimento.getId();
        this.calorias = alimento.getCalorias();
        this.nome = alimento.getNome();
    }
}
