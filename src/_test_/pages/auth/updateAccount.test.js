import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UpdateAccount from './../../../pages/auth/updateAccount';
import { GET_CURRENT_USER } from './../../../queries';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Update account page', () => {

    const mockData = {
        "getCurrentUser": [
            {
                "firstName": "Joe",
                "lastName": "Bloggs",
                "email": "joe@gmail.com",
                "profileImage": null,
                "userName": "joeBloggs",
                "joinDate": "2018-08-14T20:39:13.961Z",
                "__typename": "User"
            }
        ]

    }

    const mocks = [
        {
            request: { query: GET_CURRENT_USER },
            result: {
                "data": mockData
            }
        }
    ]

    const wrapper = mount(
        <MockedProvider mocks={mocks}>
            <BrowserRouter>
                <UpdateAccount session={mockData} unitTesting="true" />
            </BrowserRouter>
        </MockedProvider>
    )

    it('Change email forms render error', async () => {

        await new Promise(resolve => setTimeout(resolve))
        wrapper.update()

        expect(wrapper.find('.updateAccountEmailForm').length).toBe(1);

    })

    it('Change password forms render error', async () => {

        await new Promise(resolve => setTimeout(resolve))
        wrapper.update()

        expect(wrapper.find('.updateAccountPasswordForm').length).toBe(1);

    })

});