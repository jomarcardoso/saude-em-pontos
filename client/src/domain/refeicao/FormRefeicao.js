import React, { useState, useEffect} from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';
import { api } from '../../config/contants';
import WithForm from '../../components/form/WithForm';
import Input from '../../components/input/Input';
import SaFormGroup from '../../components/sa-formgroup/SaFormgroup';
import { InputNumber, Select, MultiFieldItem } from '../../components';
import Submit from '../../components/submit/submit.component';

function FormRefeicao({
  setData,
  initialData,
  onSubmit,
  data,
  errors,
  visibleErrors,
  sets,
  send
})
  {
  const [_initialData, setInitialData] = useState({});
  const [alimentos, setAlimentos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit().then(send).catch(result => console.log('catch', result));
  }

  useEffect(() => {
    if (initialData !== _initialData) {
      setInitialData(initialData);
      setData({...initialData});
    }
  });

  useEffect(() => {
    axios.get(`${api}/alimento`)
    .then(res => {
      console.log(res.data)
      setAlimentos(res.data.map(({ id: value, nome: children }) => ({ value, children })));
    });
  }, []);

  console.log(data)

  const listAlimentos = data.alimentos || [''];

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {listAlimentos.map((value, index) => (
        <MultiFieldItem
          index={index}
          {...sets}
          value={data.alimentos}
          error={errors.alimentos}
          visibleError={visibleErrors.alimentos}
          render={(multiFieldItemProps) => (
            <SaFormGroup
              error={multiFieldItemProps.error}
              visibleError={multiFieldItemProps.visibleError}
              renderInput={props => <Select
                className="form-control"
                name="alimentos"
                options={alimentos}
                required
                { ...multiFieldItemProps }
                { ...props }
              />}
            >
              a
            </SaFormGroup>
          )}
        />
      ))}
      <Submit />
    </Form>
  )
}

export default WithForm(FormRefeicao)
