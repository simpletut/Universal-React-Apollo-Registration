import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/testing';
import { UnconnectedSideBar } from './index.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<UnconnectedSideBar {...props} />);
  return wrapper;
};

describe('SideBar Component', () => {

  let wrapper;
  beforeEach(() => {
    const props = {
      session: {
        getCurrentUser: {
          firstName: 'Joe',
          lastName: 'Bloggs',
          email: 'joe@gmail.com',
          profileImage: null,
          userName: 'joeBloggs',
          joinDate: '2018-08-14T20:39:13.961Z',
          __typename: 'User'
        }
      }
    };
    wrapper = setUp(props);
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'sideBarComponent');
    expect(component.length).toBe(1);
  });

});