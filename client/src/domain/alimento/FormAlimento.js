import React from 'react';
import { Form } from 'reactstrap';

import WithForm from '../../components/form/WithForm';
import Input from '../../components/input/Input';
import SaFormGroup from '../../components/sa-formgroup/SaFormgroup';
import { InputNumber } from '../../components';
import Submit from '../../components/submit/submit.component';

function FormAlimento({ onSubmit, gets, sets, errors, visibleErrors }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit().then(result => console.log('then', result)).catch(result => console.log('catch', result));
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <SaFormGroup
        error={errors.nome}
        visibleError={visibleErrors.nome}
        renderInput={props => <Input {...gets('nome')} {...sets} required {...props} />}
      >
        Nome*
      </SaFormGroup>
      <SaFormGroup
        error={errors.calorias}
        visibleError={visibleErrors.calorias}
        renderInput={props => <InputNumber {...gets('calorias')} {...sets} required min={0} {...props} />}
      >
        Calorias*
      </SaFormGroup>
      <SaFormGroup
        error={errors.indiceGlicemico}
        visibleError={visibleErrors.indiceGlicemico}
        renderInput={props => <InputNumber {...gets('indiceGlicemico')} {...sets} required min={0} {...props} />}
      >
        Índice glicêmico*
      </SaFormGroup>
      <SaFormGroup
        error={errors.acidificacao}
        visibleError={visibleErrors.acidificacao}
        renderInput={props => <InputNumber {...gets('acidificacao')} {...sets} required min={0} {...props} />}
      >
        Acidificação*
      </SaFormGroup>
      <SaFormGroup
        error={errors.inflamatorio}
        visibleError={visibleErrors.inflamatorio}
        renderInput={props => <InputNumber {...gets('inflamatorio')} {...sets} required min={0} {...props} />}
      >
        Inflamatório*
      </SaFormGroup>
      <SaFormGroup
        error={errors.descricao}
        visibleError={visibleErrors.descricao}
        renderInput={props => <Input {...gets('descricao')} {...sets} {...props} />}
      >
        Descrição
      </SaFormGroup>
      <Submit />
    </Form>
  )
}

export default WithForm(FormAlimento, {
  nome: '',
  calorias: '',
  indiceGlicemico: '',
  acidificacao: '',
  inflamatorio: '',
  descricao: ''
})
