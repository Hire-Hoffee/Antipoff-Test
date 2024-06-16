import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UsersResponse } from "@/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, number>({
      query: (page) => `/users?page=${page}`,
    }),
  }),
});

export const { useLazyGetUsersQuery } = usersApi;
