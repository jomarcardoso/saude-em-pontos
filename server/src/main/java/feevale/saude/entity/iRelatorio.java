package feevale.saude.entity;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public interface iRelatorio {
    public Double somaCaloriasDosAlimentos(List<Alimento> alimentos);
    public Double somaAcidificacaoDosAlimentos(List<Alimento> alimentos);
    public Double somaInflamatorioDosAlimentos(List<Alimento> alimentos);
    public void gerarRelatorio();
}
