package feevale.saude.controllers;

import feevale.saude.dto.AtividadeFisicaDTO;
import feevale.saude.entity.AtividadeFisica;
import feevale.saude.service.AtividadeFisicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/atividade-fisica")
public class AtividadeFisicaController {

    @Autowired
    private AtividadeFisicaService atividadeFisicaService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<AtividadeFisicaDTO>> find() {
        List<AtividadeFisica> atividadeFisicaList = atividadeFisicaService.findAll();
        List<AtividadeFisicaDTO> atividadeFisicaDTOS = atividadeFisicaList.stream().map(cl -> new AtividadeFisicaDTO(cl)).collect(Collectors.toList());

        return ResponseEntity.ok().body(atividadeFisicaDTOS);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<AtividadeFisica> find(@PathVariable final Integer id) {
        AtividadeFisica category = atividadeFisicaService.find(id);

        return ResponseEntity.ok().body(category);
    }

    //    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> insert(@RequestBody AtividadeFisica category) {
        category = atividadeFisicaService.insert(category);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(category.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> update(@RequestBody AtividadeFisica atividadeFisica, @PathVariable Integer id) {
        atividadeFisica.setId(id);
        atividadeFisicaService.update(atividadeFisica);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable final Integer id) {
        atividadeFisicaService.delete(id);

        return ResponseEntity.noContent().build();
    }
}