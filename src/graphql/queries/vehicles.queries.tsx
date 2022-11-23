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
      insurances {
        id
        price
        title
        firstInstallment
        secondInstallment
        reactivationDate
        startDate
        suspensionDate
        vehicleId
      }
      maintenances {
        id
        name
        description
        dateDone
        kilometers
        vehicleId
      }
      revisions {
        id
        kilometers
        dateDone
        vehicleId
      }
    }
  }
`
