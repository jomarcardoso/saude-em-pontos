package feevale.SaudeEmPontos.service;

import feevale.SaudeEmPontos.repository.AlimentoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlimentoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(AlimentoService.class);

    @Autowired
    private AlimentoRepository alimentoRepository;

    public List<Alimento> findAll() {
        return alimentoRepository.findAll();
    }

    public Alimento insert(Alimento alimento) {
        alimento.setId(null);

        return alimentoRepository.save(alimento);
    }
}
