import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedUser } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedUser {...props} />);
  return wrapper;
};

describe('User Component', () => {

  let wrapper;
  beforeEach(() => {
    const props = {
      match: {
        params: {
          URL_Param: true
        }
      }
    }
    wrapper = setUp(props);
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'userComponent');
    expect(component.length).toBe(1);
  });

});