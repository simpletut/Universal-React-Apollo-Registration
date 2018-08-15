import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ForgotPassword from './../../../pages/auth/forgotPassword';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Password reset page', () => {

  const wrapper = mount(
    <MockedProvider>
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Form renders', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()
    
    expect(wrapper.find('.form_row').length).toBe(1);

  })

});