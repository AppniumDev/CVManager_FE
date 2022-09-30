import { gql } from '@apollo/client'

export const createVehicleMutation = gql`
  mutation CreateVehicle($object: VehiclesInsertInput!) {
    insertVehiclesOne(object: $object) {
      id
      name
    }
  }
`

export const updateVehicleMutation = gql`
  mutation UpdateVehicle(
    $pkColumns: VehiclesPkColumnsInput!
    $set: VehiclesSetInput
  ) {
    updateVehiclesByPk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`
