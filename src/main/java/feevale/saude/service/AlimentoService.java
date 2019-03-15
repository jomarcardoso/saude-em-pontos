package feevale.saude.service;

import feevale.saude.entity.Alimento;
import feevale.saude.repository.AlimentoRepository;
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
public class AlimentoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(AlimentoService.class);

    @Autowired
    private AlimentoRepository alimentoRepository;

    public List<Alimento> findAll() {
        return alimentoRepository.findAll();
    }

    public Alimento find(Integer id) {
        Optional<Alimento> optionalAlimento = alimentoRepository.findById(id);

        return optionalAlimento.orElseThrow(() -> new ObjectNotFoundException(Alimento.class, Alimento.class.getName()));
    }

    public Alimento insert(Alimento alimento) {
        alimento.setId(null);

        return alimentoRepository.save(alimento);
    }

    public Alimento update(Alimento alimento) {
        try {
            find(alimento.getId());
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not PUT alimento, it is not found: " + alimento.getId(), e.fillInStackTrace());
            }

            throw e;
        }

        return alimentoRepository.save(alimento);
    }

    public void delete(Integer id) {
        try {
            find(id);
            alimentoRepository.deleteById(id);
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not DELETE alimento, it is not found: " + id, e.fillInStackTrace());
            }

            throw e;
        } catch (DataIntegrityViolationException e) {
            String message = "Can not DELETE alimento, integrity violation!";
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error(message, e.fillInStackTrace());
            }

            throw new ObjectDeletedException(message, Alimento.class, Alimento.class.getName());
        }
    }
}
