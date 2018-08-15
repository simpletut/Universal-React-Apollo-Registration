import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SignUp from './../../../pages/auth/signUp';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SignUp page', () => {

  const wrapper = mount(
    <MockedProvider>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()
    
    expect(wrapper.find('.form_wrap').length).toBe(1);

  })

});