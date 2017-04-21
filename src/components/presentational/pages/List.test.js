import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import List from './List';

describe('List ', () => {
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
    ReactDOM.render(<List route={{ prods }} />, div);
  });
  test('renders the list', () => {
    const wrapper = shallow(<List route={{ prods }} />);
    expect(wrapper.find('div').children().length).toBe(2);
  });
});
