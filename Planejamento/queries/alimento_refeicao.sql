insert into alimento values (1, 3, 96, "", 50, "espaguete");
insert into alimento values (2, 3, 110, "", 50, "arroz");
insert into alimento values (3, 5, 64, "a", 50, "suco de laranja");
insert into alimento values (4, 1, 208, "a", 51, "sorvete");
insert into alimento values (5, 3, 270, "a", 46, "pão branco");
insert into alimento values (6, 6, 64, "", 36, "maçã");
insert into alimento values (7, 5, 88, "", 51, "banana");
insert into alimento values (8, 5, 43, "", 43, "laranja");
insert into alimento values (9, 3, 60, "", 39, "leite");

insert into refeicao (id, nome) values (1, "Bom Prato");
insert into refeicao_alimento values (1, 100, 1, 1);
insert into refeicao_alimento values (2, 100, 2, 1);

insert into refeicao (id, nome) values (2, "Espetácolo");
insert into refeicao_alimento values (3, 250, 3, 2);
insert into refeicao_alimento values (4, 150, 5, 2);

insert into refeicao (id, nome) values (3, "Cairú");
insert into refeicao_alimento values (7, 180, 1, 3);
insert into refeicao_alimento values (9, 200, 2, 3);