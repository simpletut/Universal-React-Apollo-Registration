import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CookiePolicy from './../../../pages/policiesAndConditions/cookiePolicy';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Cookie policy page', () => {

  const wrapper = mount(
    <BrowserRouter>
      <CookiePolicy />
    </BrowserRouter>
  )
  
  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.cookiePolicy').length).toBe(1);

  })

});