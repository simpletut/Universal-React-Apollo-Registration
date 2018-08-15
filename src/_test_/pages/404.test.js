import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './../../pages/404';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('404 Not Found page', () => {

  const wrapper = mount(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.notFound').length).toBe(1);

  })

});