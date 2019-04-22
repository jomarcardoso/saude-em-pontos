package feevale.saude.controllers;

import feevale.saude.dto.ExercicioDTO;
import feevale.saude.entity.Exercicio;
import feevale.saude.service.ExercicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/exercicio")
public class ExercicioController {

    @Autowired
    private ExercicioService exercicioService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ExercicioDTO>> find() {
        List<Exercicio> exercicioList = exercicioService.findAll();
        List<ExercicioDTO> exercicioDTOS = exercicioList.stream().map(cl -> new ExercicioDTO(cl)).collect(Collectors.toList());

        return ResponseEntity.ok().body(exercicioDTOS);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Exercicio> find(@PathVariable final Integer id) {
        Exercicio category = exercicioService.find(id);

        return ResponseEntity.ok().body(category);
    }

    //    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> insert(@RequestBody Exercicio category) {
        category = exercicioService.insert(category);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(category.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> update(@RequestBody Exercicio exercicio, @PathVariable Integer id) {
        exercicio.setId(id);
        exercicioService.update(exercicio);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable final Integer id) {
        exercicioService.delete(id);

        return ResponseEntity.noContent().build();
    }
}