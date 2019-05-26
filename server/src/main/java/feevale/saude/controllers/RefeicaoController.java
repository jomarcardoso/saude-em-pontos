package feevale.saude.controllers;

import feevale.saude.dto.RefeicaoDTO;
import feevale.saude.entity.Refeicao;
import feevale.saude.service.RefeicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/refeicao")
public class RefeicaoController {

    @Autowired
    private RefeicaoService refeicaoService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Refeicao>> find() {
        List<Refeicao> refeicaoList = refeicaoService.findAll();
        List<RefeicaoDTO> refeicaoDTOS = refeicaoList.stream().map(cl -> new RefeicaoDTO(cl)).collect(Collectors.toList());

//        return ResponseEntity.ok().body(refeicaoDTOS);
        return ResponseEntity.ok().body(refeicaoList);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Refeicao> find(@PathVariable final Integer id) {
        Refeicao category = refeicaoService.find(id);

        return ResponseEntity.ok().body(category);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> insert(@RequestBody Refeicao refeicao) {
        refeicao = refeicaoService.insert(refeicao);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(refeicao.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> update(@RequestBody Refeicao refeicao, @PathVariable Integer id) {
        refeicao.setId(id);
        refeicaoService.update(refeicao);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable final Integer id) {
        refeicaoService.delete(id);

        return ResponseEntity.noContent().build();
    }
}