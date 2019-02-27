package feevale.SaudeEmPontos.repositorios;

import feevale.SaudeEmPontos.entidades.Refeicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefeicaoRepositorio extends JpaRepository<Refeicao, Integer> { }