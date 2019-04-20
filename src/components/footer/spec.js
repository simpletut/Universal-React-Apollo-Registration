import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedFooter } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedFooter {...props} />);
  return wrapper;
};

describe('Footer Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'footerComponent');
    expect(component.length).toBe(1);
  });

});