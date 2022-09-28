import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { InsuranceEntity } from '../../interfaces'

export const insurancesApi = createApi({
  reducerPath: 'insurancesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Insurance'],
  endpoints: (builder) => ({
    getAllInsurances: builder.query<InsuranceEntity[], void>({
      query: () => ({
        url: '/insurances',
      }),
      providesTags: ['Insurance'],
    }),
    getInsuranceById: builder.query<InsuranceEntity, string>({
      query: (id) => ({
        url: `/insurances/${id}`,
      }),
      providesTags: ['Insurance'],
    }),
    createInsurance: builder.mutation<InsuranceEntity, InsuranceEntity>({
      query: (vehicle) => ({
        url: `/insurances`,
        method: 'POST',
        body: vehicle,
      }),
      invalidatesTags: ['Insurance'],
    }),
    updateInsurance: builder.mutation<InsuranceEntity, InsuranceEntity>({
      query: (vehicle) => ({
        url: `/insurances/${vehicle.id}`,
        method: 'PATCH',
        body: vehicle,
      }),
      invalidatesTags: ['Insurance'],
    }),
  }),
})

export const {
  useGetAllInsurancesQuery,
  useGetInsuranceByIdQuery,
  useCreateInsuranceMutation,
  useUpdateInsuranceMutation,
} = insurancesApi
