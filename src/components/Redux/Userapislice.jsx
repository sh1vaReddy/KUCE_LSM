import { apiSlice } from "./apislice";

const USERS_URL = 'http://localhost:8000/api/v1/';

export const UserapiClients = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/login`,
          method: 'POST',
          body: data,
        }),
      }),
    })
})


