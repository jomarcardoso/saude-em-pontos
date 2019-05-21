import React, { useState, useEffect} from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';
import { api } from '../../config/contants';
import WithForm from '../../components/form/WithForm';
import Input from '../../components/input/Input';
import SaFormGroup from '../../components/sa-formgroup/SaFormgroup';
import { InputNumber, Select, MultiFieldItem } from '../../components';
import Submit from '../../components/submit/submit.component';
import CompositeField from '../../components/composite-field/composite-field.component';

function FormRefeicao({
  setData,
  initialData,
  onSubmit,
  data,
  errors,
  visibleErrors,
  sets,
  gets,
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

  const listAlimentos = data.alimentosQuantidades || [{ alimento: '', quantidade: '' }];

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <SaFormGroup
        error={errors.nome}
        visibleError={visibleErrors.nome}
        renderInput={props => <Input {...gets('nome')} {...sets} required {...props} />}
      >
        Nome*
      </SaFormGroup>
      {listAlimentos.map((value, index) => (
          <MultiFieldItem
          index={index}
          {...sets}
          value={data.alimentosQuantidades}
          error={errors.alimentosQuantidades}
          visibleError={visibleErrors.alimentosQuantidades}
          render={({ addBelow, deleteCurrent, ...multiFieldItemProps }) => (
            <CompositeField
              {...multiFieldItemProps}
              name="alimentosQuantidades"
              render={({
                value,
                error,
                visibleError,
                ...compositeFieldProps
              }) => (
                <SaFormGroup
                  error={multiFieldItemProps.error}
                  visibleError={multiFieldItemProps.visibleError}
                  renderInput={formGroupProps => (
                    <div className="w-100">
                      <div>
                        <div className="input-group">
                          <InputNumber
                            value={value.quantidade}
                            error={error.quantidade}
                            visibleError={visibleError.quantidade}
                            className="form-control"
                            name="quantidade"
                            { ...compositeFieldProps }
                            required
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => {
                                addBelow('alimentosQuantidades')
                              }}
                              type="button"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => {
                                deleteCurrent('alimentosQuantidades')
                              }}
                              type="button"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Select
                          value={value.alimento_id}
                          error={error.alimento_id}
                          visibleError={visibleError.alimento_id}
                          className="form-control"
                          name="alimento_id"
                          options={alimentos}
                          required
                          { ...compositeFieldProps }
                        />
                      </div>
                    </div>
                  )}
                >
                  Alimento {index + 1}
                </SaFormGroup>
              )}
            />
          )}
        />
      ))}
      <Submit />
    </Form>
  )
}

export default WithForm(FormRefeicao)
