import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VehicleEntity } from '../../interfaces'

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllVehicles: builder.query<VehicleEntity[], void>({
      query: () => ({
        url: '/vehicles',
      }),
    }),
    getVehicleById: builder.query<VehicleEntity, string>({
      query: (id) => ({
        url: `/vehicles/${id}`,
      }),
    }),
    updateVehicle: builder.mutation<VehicleEntity, VehicleEntity>({
      query: (vehicle) => ({
        url: `/vehicles/${vehicle.id}`,
        method: 'PATCH',
        body: vehicle,
      }),
    }),
  }),
})

export const {
  useGetAllVehiclesQuery,
  useGetVehicleByIdQuery,
  useUpdateVehicleMutation,
} = vehiclesApi
