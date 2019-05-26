package feevale.saude.repository;

import feevale.saude.entity.RefeicaoAlimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefeicaoAlimentoRepository extends JpaRepository<RefeicaoAlimento, Integer> { }