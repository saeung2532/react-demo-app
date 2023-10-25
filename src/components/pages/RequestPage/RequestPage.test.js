import React from 'react';
import { shallow } from 'enzyme';
import RequestPage from './RequestPage';

describe('<RequestPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<RequestPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
