import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VehicleEntity } from '../../interfaces'

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Vehicle'],
  endpoints: (builder) => ({
    getAllVehicles: builder.query<VehicleEntity[], void>({
      query: () => ({
        url: '/vehicles',
      }),
      providesTags: ['Vehicle'],
    }),
    getVehicleById: builder.query<VehicleEntity, string>({
      query: (id) => ({
        url: `/vehicles/${id}`,
      }),
      providesTags: ['Vehicle'],
    }),
    createVehicle: builder.mutation<VehicleEntity, VehicleEntity>({
      query: (vehicle) => ({
        url: `/vehicles`,
        method: 'POST',
        body: vehicle,
      }),
      invalidatesTags: ['Vehicle'],
    }),
    updateVehicle: builder.mutation<VehicleEntity, VehicleEntity>({
      query: (vehicle) => ({
        url: `/vehicles/${vehicle.id}`,
        method: 'PATCH',
        body: vehicle,
      }),
      invalidatesTags: ['Vehicle'],
    }),
  }),
})

export const {
  useGetAllVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} = vehiclesApi
