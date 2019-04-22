package feevale.saude.service;

import feevale.saude.entity.AtividadeFisica;
import feevale.saude.repository.AtividadeFisicaRepository;
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
public class AtividadeFisicaService {

    private static final Logger LOGGER = LoggerFactory.getLogger(AtividadeFisicaService.class);

    @Autowired
    private AtividadeFisicaRepository atividadeFisicaRepository;

    public List<AtividadeFisica> findAll() {
        return atividadeFisicaRepository.findAll();
    }

    public AtividadeFisica find(Integer id) {
        Optional<AtividadeFisica> optionalAtividadeFisica = atividadeFisicaRepository.findById(id);

        return optionalAtividadeFisica.orElseThrow(() -> new ObjectNotFoundException(AtividadeFisica.class, AtividadeFisica.class.getName()));
    }

    public AtividadeFisica insert(AtividadeFisica atividadeFisica) {
        atividadeFisica.setId(null);

        return atividadeFisicaRepository.save(atividadeFisica);
    }

    public AtividadeFisica update(AtividadeFisica atividadeFisica) {
        try {
            find(atividadeFisica.getId());
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not PUT atividadeFisica, it is not found: " + atividadeFisica.getId(), e.fillInStackTrace());
            }

            throw e;
        }

        return atividadeFisicaRepository.save(atividadeFisica);
    }

    public void delete(Integer id) {
        try {
            find(id);
            atividadeFisicaRepository.deleteById(id);
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not DELETE atividadeFisica, it is not found: " + id, e.fillInStackTrace());
            }

            throw e;
        } catch (DataIntegrityViolationException e) {
            String message = "Can not DELETE atividadeFisica, integrity violation!";
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error(message, e.fillInStackTrace());
            }

            throw new ObjectDeletedException(message, AtividadeFisica.class, AtividadeFisica.class.getName());
        }
    }
}
