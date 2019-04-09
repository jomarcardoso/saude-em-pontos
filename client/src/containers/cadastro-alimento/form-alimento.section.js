import React, { useState } from 'react';
import { Input, Form } from 'reactstrap';
import { SaInput, SaSubmit } from '../../components';

export default function FormAlimento({
  onSend,
  nome,
  calorias,
  indiceGlicemico,
  acidificacao,
  inflamatorio,
  descricao,
  setNome,
  setCalorias,
  setIndiceGlicemico,
  setAcidificacao,
  setInflamatorio,
  setDescricao
}) {

  async function submit(e) {
    e.preventDefault();
    if (!onSend) return;

    const result = await onSend({
      nome,
      calorias: Number(calorias),
      indiceGlicemico: Number(indiceGlicemico),
      acidificacao: Number(acidificacao),
      inflamatorio: Number(inflamatorio),
      descricao
    })

    if (result.success) {
      return;
    }
  }

  return (
    <Form onSubmit={submit}>
      <SaInput label="Nome">
        <Input
          id="nome"
          onChange={e => setNome(e.target.value)}
          value={nome}
          name="nome"
        />
      </SaInput>
      <SaInput label="Calorias">
        <Input
          id="calorias"
          onChange={e => setCalorias(e.target.value)}
          value={calorias}
          name="calorias"
          type="number"
        />
      </SaInput>
      <SaInput label="Indice Glicêmico">
        <Input
          id="indiceGlicemico"
          onChange={e => setIndiceGlicemico(e.target.value)}
          value={indiceGlicemico}
          name="indiceGlicemico"
          type="number"
        />
      </SaInput>
      <SaInput label="Acidificação">
        <Input
          id="acidificacao"
          onChange={e => setAcidificacao(e.target.value)}
          value={acidificacao}
          name="acidificacao"
          type="number"
        />
      </SaInput>
      <SaInput label="Descrição">
        <Input
          id="descricao"
          onChange={e => setDescricao(e.target.value)}
          value={descricao}
          name="descricao"
          type="number"
        />
      </SaInput>
      <SaInput label="Inflamatório">
        <Input
          id="inflamatorio"
          onChange={e => setInflamatorio(e.target.value)}
          value={inflamatorio}
          name="inflamatorio"
          type="number"
        />
      </SaInput>
      <SaSubmit />
    </Form>
  );
}
