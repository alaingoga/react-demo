import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ProductCard from './ProductCard';

describe('ProductCard ', () => {
  const testProduct = {
    id: '123',
    name: 'hello world'
  };
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductCard product={testProduct} />, div);
  });
  test('renders the card name', () => {
    const wrapper = shallow(<ProductCard product={testProduct} />);
    expect(wrapper.find('h2.card-headline').length).toBe(1);
  });
});
