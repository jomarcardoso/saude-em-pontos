package feevale.saude.service;

import feevale.saude.entity.Alimento;
import feevale.saude.entity.Refeicao;
import feevale.saude.entity.RefeicaoAlimento;
import feevale.saude.entity.Relatorio;
import feevale.saude.repository.AlimentoRepository;
import feevale.saude.repository.RefeicaoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RelatorioService {
//    private static final Logger LOGGER = LoggerFactory.getLogger(AlimentoService.class);

//    @Autowired
//    private AlimentoRepository alimentoRepository;

    @Autowired
    private RefeicaoRepository refeicaoRepository;

    public Relatorio relatorioDoDia() {
        List<Refeicao> refeicoes = refeicaoRepository.findAll();



//        Alimento alimento1 = new Alimento(1, "banana", 1.0, 1.0, 1.0, "");
//        Alimento alimento2 = new Alimento(1, "pêra", 1.0, 2.0, 3.0, "");
//        List<Alimento> alimentos = new ArrayList<Alimento>();
//        alimentos.add(alimento1);
//        alimentos.add(alimento2);
        Relatorio relatorio = new Relatorio(refeicoes);
        relatorio.gerarRelatorio();
        return relatorio;
    }
}
