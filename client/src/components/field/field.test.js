import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import { Field } from '.';

function Select(props) {
  return <select className="Select-test" {...props} />;
}

function Input(props) {
  return <input className="Input-test" {...props} />;
}

describe('<Field />', () => {
  describe('render:', () => {
    it('props: render={Input}', () => {
      const wrapper = create(<Field render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: name="test" render={Input}', () => {
      const wrapper = create(<Field name="test" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: value="" render={Input}', () => {
      const wrapper = create(<Field value="" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: value="test" render={Input}', () => {
      const wrapper = create(<Field value="test" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: className="test" render={Input}', () => {
      const wrapper = create(<Field className="test" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: className="" render={Input}', () => {
      const wrapper = create(<Field className="" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: required render={Input}', () => {
      const wrapper = create(<Field required render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: type="test" render={Input}', () => {
      const wrapper = create(<Field type="test" render={Input} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: render={Select}', () => {
      const wrapper = create(<Field render={Select} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: render={Select} value="test"', () => {
      const wrapper = create(<Field render={Select} value="test" />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('props: render={Select} className="test"', () => {
      const wrapper = create(<Field render={Select} className="test" />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props.setErrorByName', () => {
    it('props: { setErrorByName, render: Select } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field setErrorByName={mockFn} render={Select} />);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setErrorByName, required, render: Select } => calls', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} render={Select} />);
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { setErrorByName, required, error="test", render: Select } => calls', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} error="test" render={Select} />);
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { setErrorByName, required, error="test", render: Select, invalidMessageEmptyField="test" } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} error="test" render={Select} invalidMessageEmptyField="test" />);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setErrorByName, required, error, noValidate, render: Select } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} error="test" render={Select} noValidate />);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setErrorByName, required, render: Input } => calls', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} render={Input} />);
      expect(mockFn).toHaveBeenCalledWith(undefined, 'O campo está vazio');
    });

    it('props: { setErrorByName, required, invalidMessageEmptyField: test, render: Input } => calls with "test"', () => {
      const mockFn = jest.fn();
      render(<Field required setErrorByName={mockFn} invalidMessageEmptyField="test" render={Input} />);
      expect(mockFn).toHaveBeenCalledWith(undefined, 'test');
    });

    it('props: { setErrorByName, error, render: Input } => does with ""', () => {
      const mockFn = jest.fn();
      render(<Field setErrorByName={mockFn} error="test" render={Input} />);
      expect(mockFn).toHaveBeenCalledWith(undefined, '');
    });

    it('props: { setErrorByName, error, render: Input } => does with ""', () => {
      const mockFn = jest.fn();
      render(<Field setErrorByName={mockFn} error="test" render={Input} required />);
      expect(mockFn).toHaveBeenCalledWith(undefined, 'O campo está vazio');
    });

    it('props: { setErrorByName, error, required, render: Input } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field setErrorByName={mockFn} error="O campo está vazio" render={Input} required />);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setErrorByName, error, render: Input } => does with ""', () => {
      const mockFn = jest.fn();
      render(<Field setErrorByName={mockFn} invalidMessage="test" error="test" value="" render={Input} />);
      expect(mockFn).toHaveBeenCalledWith(undefined, '');
    });
  });

  describe('props.onChange', () => {
    it('props: { onChange, render: Input } onchange => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field onChange={mockFn} data-testid="onchange1" render={Input} />);
      fireEvent.change(getByTestId('onchange1'), { target: { value: 'test' } });
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { onChange, render: Input } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field onChange={mockFn} data-testid="onchange2" render={Input} />);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });

  describe('props.setDataByName', () => {
    it('props: { setDataByName render: Input } => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setDataByName={mockFn} data-testid="setDataByName1" render={Input} />);
      fireEvent.change(getByTestId('setDataByName1'), { target: { name: 'test', value: 'test' } });
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { setDataByName, render: Input } => does not call', () => {
      const mockFn = jest.fn();
      render(<Field setDataByName={mockFn} render={Input} />);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setDataByName, render: Input, name: "test" } => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setDataByName={mockFn} data-testid="setDataByName3" name="test" render={Input} />);
      fireEvent.change(getByTestId('setDataByName3'), { target: { name: 'test', value: 'test' } });
      expect(mockFn).toHaveBeenCalledWith('test', 'test');
    });

    it('props: { setDataByName, name: "test", render: "Input" } => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setDataByName={mockFn} data-testid="setDataByName4" name="test" render={Input} />);
      fireEvent.change(getByTestId('setDataByName4'), { target: { name: 'test', value: '' } });
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setDataByName, render: Input, name: "test", value: "test" } => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setDataByName={mockFn} data-testid="setDataByName5" name="test" value="test" render={Input} />);
      fireEvent.change(getByTestId('setDataByName5'), { target: { name: 'test', value: 'test' } });
      expect(mockFn).not.toHaveBeenCalled();
    });
  });

  describe('props.setShowErrorByName', () => {
    it('props: { setShowErrorByName, render: Input } onClick => does not call', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setShowErrorByName={mockFn} data-testid="setShowErrorByName1" render={Input} />);
      fireEvent.click(getByTestId('setShowErrorByName1'));
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setShowErrorByName, render: Input } onBlur => does not call', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field setShowErrorByName={mockFn} data-testid="setShowErrorByName2" render={Input} />);
      fireEvent.blur(getByTestId('setShowErrorByName2'));
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setShowErrorByName, render: Input, error: "test" } onBlur => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field error="test" setShowErrorByName={mockFn} data-testid="setShowErrorByName3" render={Input} />);
      fireEvent.blur(getByTestId('setShowErrorByName3'));
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { setShowErrorByName, render: Input, error: "test", visibleError } onBlur => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field error="test" visibleError setShowErrorByName={mockFn} data-testid="setShowErrorByName4" render={Input} />);
      fireEvent.blur(getByTestId('setShowErrorByName4'));
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('props: { setShowErrorByName, render: Input, visibleError } onBlur => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field visibleError setShowErrorByName={mockFn} data-testid="setShowErrorByName5" render={Input} />);
      fireEvent.focus(getByTestId('setShowErrorByName5'));
      expect(mockFn).toHaveBeenCalled();
    });

    it('props: { setShowErrorByName, render: Input, visibleError } onBlur => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field visibleError setShowErrorByName={mockFn} data-testid="setShowErrorByName6" render={Input} />);
      fireEvent.focus(getByTestId('setShowErrorByName6'));
      expect(mockFn).toHaveBeenCalledWith(undefined, false);
    });

    it('props: { setShowErrorByName, render: Input, error: "test" } onBlur => calls', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Field error="test" setShowErrorByName={mockFn} data-testid="setShowErrorByName7" render={Input} />);
      fireEvent.blur(getByTestId('setShowErrorByName7'));
      expect(mockFn).toHaveBeenCalledWith(undefined, true);
    });
  });
});
