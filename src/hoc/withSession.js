import React from 'react';
import { GET_CURRENT_USER } from './../queries';

import { Query } from 'react-apollo';

/* eslint-disable */
const withSession = Component => props => (
  <Query query={GET_CURRENT_USER} >
    {({ data, loading, refetch }) => {

      if (loading) return null;
      return (
        <Component {...props} refetch={refetch} session={data} />
      )
    }}
  </Query>
);
/* eslint-enable */

export default withSession;