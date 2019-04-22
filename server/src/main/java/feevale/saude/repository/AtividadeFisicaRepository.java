package feevale.saude.repository;

import feevale.saude.entity.AtividadeFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtividadeFisicaRepository extends JpaRepository<AtividadeFisica, Integer> { }