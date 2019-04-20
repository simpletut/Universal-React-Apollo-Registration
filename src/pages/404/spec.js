import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedNotFound } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedNotFound {...props} />);
  return wrapper;
};

describe('Not Found Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'notFoundComponent');
    expect(component.length).toBe(1);
  });

});