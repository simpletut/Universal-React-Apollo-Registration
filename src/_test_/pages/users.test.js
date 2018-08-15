import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Users from './../../pages/users';
import { GET_ALL_USERS } from './../../queries';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Users page', () => {

  const mocks = [
    {
      request: { query: GET_ALL_USERS },
      result: {
        "data": {
          "getAllUsers": [
            {
              "firstName": "Joe",
              "lastName": "Bloggs",
              "bio": null,
              "email": "joe@gmail.com",
              "profileImage": null,
              "userName": "joeBloggs",
              "__typename": "User"
            },
            {
              "firstName": "Joe",
              "lastName": "Bloggs",
              "bio": null,
              "email": "joe@gmail.com",
              "profileImage": null,
              "userName": "joeBloggs",
              "__typename": "User"
            },
            {
              "firstName": "Joe",
              "lastName": "Bloggs",
              "bio": null,
              "email": "joe@gmail.com",
              "profileImage": null,
              "userName": "joeBloggs",
              "__typename": "User"
            }
          ]
        }
      }
    }
  ]

  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Mock data (3 Users) are not being returned by Query', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.user').length).toBe(3);

  })

});