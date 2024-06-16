import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UsersResponse, User } from "@/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, number>({
      query: (page) => `/users?page=${page}`,
    }),
    getUserById: builder.query<{ data: User }, number>({
      query: (id) => `/users/${id}`,
    }),
    registerUser: builder.mutation<
      { id: string; token: string },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/register`,
        method: "POST",
        body: { email, password },
      }),
    }),
    loginUser: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `/login`,
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = usersApi;
