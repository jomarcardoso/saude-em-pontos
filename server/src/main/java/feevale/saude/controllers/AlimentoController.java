package feevale.saude.controllers;

import feevale.saude.dto.AlimentoDTO;
import feevale.saude.entity.Alimento;
import feevale.saude.service.AlimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/alimento")
public class AlimentoController {

    @Autowired
    private AlimentoService alimentoService;

//    @CrossOrigin(origins = "http://localhost:3000")
//    @RequestMapping(method = RequestMethod.OPTIONS)
//    public ResponseEntity<Void> options() {
//        return ResponseEntity.noContent().build();
//    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<AlimentoDTO>> find() {
        List<Alimento> alimentoList = alimentoService.findAll();
        List<AlimentoDTO> alimentoDTOS = alimentoList.stream().map(cl -> new AlimentoDTO(cl)).collect(Collectors.toList());

        return ResponseEntity.ok().body(alimentoDTOS);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Alimento> find(@PathVariable final Integer id) {
        Alimento category = alimentoService.find(id);

        return ResponseEntity.ok().body(category);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> insert(@RequestBody Alimento category) {
        category = alimentoService.insert(category);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(category.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> update(@RequestBody Alimento alimento, @PathVariable Integer id) {
        alimento.setId(id);
        alimentoService.update(alimento);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable final Integer id) {
        alimentoService.delete(id);

        return ResponseEntity.noContent().build();
    }
}