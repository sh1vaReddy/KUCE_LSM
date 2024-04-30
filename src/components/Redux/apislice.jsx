import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' });


export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
      getUser: builder.mutation({
        query: (Roll_NO) => ({
          url: '/login', 
          method: 'POST',
          body: Roll_NO
        })
      })
    })
  });

