package feevale.saude.service;

import feevale.saude.entity.Refeicao;
import feevale.saude.repository.RefeicaoRepository;
import org.hibernate.ObjectDeletedException;
import org.hibernate.ObjectNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RefeicaoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RefeicaoService.class);

    @Autowired
    private RefeicaoRepository refeicaoRepository;

    public List<Refeicao> findAll() {
        return refeicaoRepository.findAll();
    }

    public Refeicao find(Integer id) {
        Optional<Refeicao> optionalRefeicao = refeicaoRepository.findById(id);

        return optionalRefeicao.orElseThrow(() -> new ObjectNotFoundException(Refeicao.class, Refeicao.class.getName()));
    }

    public Refeicao insert(Refeicao refeicao) {
        refeicao.setId(null);

        return refeicaoRepository.save(refeicao);
    }

    public Refeicao update(Refeicao refeicao) {
        try {
            find(refeicao.getId());
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not PUT refeicao, it is not found: " + refeicao.getId(), e.fillInStackTrace());
            }

            throw e;
        }

        return refeicaoRepository.save(refeicao);
    }

    public void delete(Integer id) {
        try {
            find(id);
            refeicaoRepository.deleteById(id);
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not DELETE refeicao, it is not found: " + id, e.fillInStackTrace());
            }

            throw e;
        } catch (DataIntegrityViolationException e) {
            String message = "Can not DELETE refeicao, integrity violation!";
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error(message, e.fillInStackTrace());
            }

            throw new ObjectDeletedException(message, Refeicao.class, Refeicao.class.getName());
        }
    }
}
