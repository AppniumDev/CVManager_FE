import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VehicleEntity } from '../../interfaces'

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllVehicles: builder.query<VehicleEntity, void>({
      query: () => ({
        url: '/vehicles',
      }),
    }),
  }),
})

export const { useGetAllVehiclesQuery } = vehiclesApi
