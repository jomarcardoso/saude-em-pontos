package feevale.SaudeEmPontos.repository;

import feevale.SaudeEmPontos.entity.Alimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento, Integer> {  }