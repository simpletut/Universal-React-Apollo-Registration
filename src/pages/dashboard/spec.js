import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedDashboard } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedDashboard {...props} />);
  return wrapper;
};

describe('Dashboard Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'dashboardComponent');
    expect(component.length).toBe(1);
  });

});