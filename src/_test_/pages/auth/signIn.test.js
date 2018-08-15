import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './../../../pages/auth/signIn';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SignIn page', () => {

  const wrapper = mount(
    <MockedProvider>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()
    
    expect(wrapper.find('.form_wrap').length).toBe(1);

  })

});