import { gql } from '@apollo/client'

export const createInsuranceMutation = gql`
  mutation CreateInsurance($object: InsurancesInsertInput!) {
    insertInsurancesOne(object: $object) {
      id
    }
  }
`

export const updateInsuranceMutation = gql`
  mutation UpdateInsurance(
    $pkColumns: InsurancesPkColumnsInput!
    $set: InsurancesSetInput
  ) {
    updateInsurancesByPk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`

export const deleteInsuranceMutation = gql`
  mutation DeleteInsurance($id: Int!) {
    deleteInsurancesByPk(id: $id) {
      id
    }
  }
`
