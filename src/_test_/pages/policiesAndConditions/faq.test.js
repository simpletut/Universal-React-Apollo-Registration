import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FAQ from './../../../pages/policiesAndConditions/faq';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FAQ page', () => {

  const wrapper = mount(
    <BrowserRouter>
      <FAQ />
    </BrowserRouter>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.faq').length).toBe(1);

  })

});