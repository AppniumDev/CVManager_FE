import { gql } from '@apollo/client'

export const getAllInsurancesQuery = gql`
  query AllInsurances {
    insurances {
      id
      title
      firstInstallment
      secondInstallment
      price
      vehicleId
    }
  }
`

export const getInsuranceByIdQuery = gql`
  query SingleInsurance($insuranceId: Int!) {
    insurancesByPk(id: $insuranceId) {
      id
      title
      firstInstallment
      secondInstallment
      price
      startDate
      endDate
      suspensionDate
      reactivationDate
      vehicleId
    }
  }
`
