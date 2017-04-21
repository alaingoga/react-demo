import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ProductDetails from './ProductDetails';

describe('ProductCard ', () => {
  const testProduct = {
    id: '123',
    name: 'hello world',
    image: 'test.jpg'
  };
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductDetails product={testProduct} />, div);
  });
  test('renders the card name', () => {
    const wrapper = shallow(<ProductDetails product={testProduct} />);
    expect(wrapper.find('img.product-image').length).toBe(1);
  });
});
