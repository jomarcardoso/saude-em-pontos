import React, { Component } from 'react';
import { getDisplayName } from '../../utils/react';

/**
 *
 * @param {node} WrappedComponent
 * @param {object} initialData
 */
export default function WithForm(WrappedComponent, initialData) {

  class Form extends Component {
    constructor(props) {
      super(props);

      this.state = {
        submittingForm: false,
        errors: {},
        visibleErrors: {},
        data: initialData || {}
      };
    }

    get sets() {
      return {
        setErrorByName: this._setErrorByName,
        setShowErrorByName: this._setShowErrorByName,
        setDataByName: this._setDataByName
      };
    }

    _setShowErrorByName = (name, show) => {
      const { visibleErrors } = this.state;

      visibleErrors[name] = show;
      this._handleShowErrors(visibleErrors);
    }

    _setErrorByName = (name, errorMessage) => {
      const { errors } = this.state;

      errors[name] = errorMessage;
      this._handleErrors(errors);
    }

    _setDataByName = (name, value) => {
      const { data } = this.state;

      data[name] = value;
      this._handleData(data);
    }

    _gets = (name) => {
      const { data, errors, visibleErrors } = this.state;
      return {
        name,
        value: data[name],
        error: errors[name],
        visibleError: visibleErrors[name]
      };
    }

    /**
     * @async
     * @param {event} e
     * @return {Promise<object>}
     */
    _handleSubmit = (e) => {
      // TODO: wait for handleError
      if (e) e.preventDefault();

      const { data, errors, submittingForm } = this.state;

      if (submittingForm) return Promise.resolve(data);

      this._handleSubmittingForm(true);

      return new Promise((resolve, reject) => {
        this._handleSubmittingForm(false);

        if (!this._isFormValid()) {
          this._showAllErrors();
          return reject(errors);
        }

        return resolve(data);
      });
    }

    _handleSubmittingForm(submittingForm) {
      this.setState({ submittingForm });
    }

    _handleData = (data) => {
      this.setState({ data });
    }

    _handleErrors(errors) {
      this.setState({ errors });
    }

    _handleShowErrors(visibleErrors) {
      this.setState({ visibleErrors });
    }

    _showAllErrors() {
      const { errors } = this.state;
      Object.entries(errors).forEach(([name, errorMessage]) => {
        this._setShowErrorByName(name, Boolean(errorMessage));
      });
    }

    _isFormValid() {
      const { errors } = this.state;
      return Object.values(errors).every(e => !e[1]);
    }

    render() {
      const {
        data,
        errors,
        submittingForm,
        visibleErrors
      } = this.state;



      return (
        <WrappedComponent
          submittingForm={submittingForm}
          data={data}
          errors={errors}
          visibleErrors={visibleErrors}
          setDataByName={this._setDataByName}
          onSubmit={this._handleSubmit}
          setErrorByName={this._setErrorByName}
          setShowErrorByName={this._setShowErrorByName}
          setData={this._handleData}
          gets={this._gets}
          sets={this.sets}
          {...this.props}
        />
      );
    }
  }

  Form.displayName = `Form(${getDisplayName(WrappedComponent)})`;
  return Form;
}
