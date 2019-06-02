package feevale.saude.entity;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public interface iRelatorio {
    public Double somaCaloriasDosAlimentos(List<RefeicaoAlimento> alimentosQuantidades);
    public Double somaAcidificacaoDosAlimentos(List<RefeicaoAlimento> alimentosQuantidades);
    public Double somaInflamatorioDosAlimentos(List<RefeicaoAlimento> alimentosQuantidades);
    public void gerarRelatorio();
}
