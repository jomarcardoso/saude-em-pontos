package feevale.saude.controllers;

import feevale.saude.entity.Alimento;
import feevale.saude.entity.RefeicaoAlimento;
import feevale.saude.entity.Relatorio;
import feevale.saude.service.RefeicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/relatorio")
public class RelatorioController {

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Relatorio> find() {
        Alimento alimento1 = new Alimento(1, "banana", 1.0, 1.0, 1.0, "");
        Alimento alimento2 = new Alimento(1, "pêra", 1.0, 2.0, 3.0, "");
        List<Alimento> alimentos = new ArrayList<Alimento>();
        alimentos.add(alimento1);
        alimentos.add(alimento2);
        Relatorio relatorio = new Relatorio(alimentos);
        relatorio.gerarRelatorio();
        return ResponseEntity.ok().body(relatorio);
    }
}
