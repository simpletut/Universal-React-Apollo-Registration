import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedUsers } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedUsers {...props} />);
  return wrapper;
};

describe('Users Component', () => {

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
    const component = findByTestAtrr(wrapper, 'usersComponent');
    expect(component.length).toBe(1);
  });

});