package feevale.saude.service;

import feevale.saude.entity.Exercicio;
import feevale.saude.repository.ExercicioRepository;
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
public class ExercicioService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExercicioService.class);

    @Autowired
    private ExercicioRepository exercicioRepository;

    public List<Exercicio> findAll() {
        return exercicioRepository.findAll();
    }

    public Exercicio find(Integer id) {
        Optional<Exercicio> optionalExercicio = exercicioRepository.findById(id);

        return optionalExercicio.orElseThrow(() -> new ObjectNotFoundException(Exercicio.class, Exercicio.class.getName()));
    }

    public Exercicio insert(Exercicio exercicio) {
        exercicio.setId(null);

        return exercicioRepository.save(exercicio);
    }

    public Exercicio update(Exercicio exercicio) {
        try {
            find(exercicio.getId());
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not PUT exercicio, it is not found: " + exercicio.getId(), e.fillInStackTrace());
            }

            throw e;
        }

        return exercicioRepository.save(exercicio);
    }

    public void delete(Integer id) {
        try {
            find(id);
            exercicioRepository.deleteById(id);
        } catch (ObjectNotFoundException e) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error("Can not DELETE exercicio, it is not found: " + id, e.fillInStackTrace());
            }

            throw e;
        } catch (DataIntegrityViolationException e) {
            String message = "Can not DELETE exercicio, integrity violation!";
            if (LOGGER.isDebugEnabled()) {
                LOGGER.error(message, e.fillInStackTrace());
            }

            throw new ObjectDeletedException(message, Exercicio.class, Exercicio.class.getName());
        }
    }
}
