import { gql } from '@apollo/client'

export const getAllVehiclesQuery = gql`
  query AllVehicles {
    vehicles {
      id
      name
      licensePlate
      buildDate
      image
    }
  }
`

export const getVehicleByIdQuery = gql`
  query SingleVehicle($vehicleId: Int!) {
    vehiclesByPk(id: $vehicleId) {
      id
      name
      licensePlate
      buildDate
      image
    }
  }
`
