package feevale.saude.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Refeicao implements Serializable {

    private static final long serialVersionUID = -8580761754019166789L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    @OneToMany(mappedBy = "refeicao", cascade = CascadeType.ALL)
    private List<RefeicaoAlimento> alimentosQuantidades = new ArrayList<>();

//    @ManyToMany
//    @JoinTable(
//            name = "course_like",
//            joinColumns = @JoinColumn(name = "student_id"),
//            inverseJoinColumns = @JoinColumn(name = "course_id"))
//    List<Course> likedCourses;

//    @ManyToOne
//    @JoinColumn(name = "refeicao_id")
//    private Usuario usuario;

    private Date horario = new Date();
}
