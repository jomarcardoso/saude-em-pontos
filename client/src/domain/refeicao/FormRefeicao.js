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
  }, [])

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <MultiFieldItem
        index={0}
        {...sets}
        value={data.a}
        error={errors.a}
        visibleError={visibleErrors.a}
        render={(restProps) => (
          <SaFormGroup
            error={restProps.error}
            visibleError={restProps.visibleError}
            renderInput={props => <Select
              className="form-control"
              // {...gets('a')}
              // {...sets}
              name="a"
              options={alimentos}
              required
              { ...restProps }
              { ...props }
            />}
          >
            a
          </SaFormGroup>
        )}
      />
      {/* <MultiField
        index={1}
        {...sets}
        value={data.a}
        render={(restProps) => (
          <SaFormGroup
            // error={errors.a}
            // visibleError={visibleErrors.a}
            renderInput={props => <Select
              className="form-control"
              // {...gets('a')}
              // {...sets}
              name="a"
              options={alimentos}
              required
              { ...restProps }
            />}
          >
            a
          </SaFormGroup>
        )}
      /> */}
      <Submit />
    </Form>
  )
}

export default WithForm(FormRefeicao, {
  a: []
})
