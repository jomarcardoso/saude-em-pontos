package feevale.saude.controllers;

import feevale.saude.entity.Alimento;
import feevale.saude.entity.RefeicaoAlimento;
import feevale.saude.entity.Relatorio;
import feevale.saude.service.RefeicaoService;
import feevale.saude.service.RelatorioService;
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

    @Autowired
    private RelatorioService relatorioService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Relatorio> find() {
        Relatorio relatorio = relatorioService.relatorioDoDia();
        return ResponseEntity.ok().body(relatorio);
    }
}
