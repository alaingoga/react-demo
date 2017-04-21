import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Product from './Product';

describe('Product ', () => {
  const prods = [
    {
      id: 'abc',
      name: 'hello world'
    },
    {
      id: 'def',
      name: 'hi there'
    }
  ];
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Product params={{ id: 'abc' }} route={{ prods }} />, div);
  });
  test('renders one product', () => {
    const wrapper = shallow(<Product params={{ id: 'abc' }} route={{ prods }} />);
    expect(wrapper.find('div').children().length).toBe(1);
  });
});
