import { gql } from '@apollo/client'

export const getAllInsurancesQuery = gql`
  query AllInsurances {
    insurances {
      id
      description
      firstInstallment
      secondInstallment
      price
    }
  }
`

export const getInsuranceByIdQuery = gql`
  query SingleInsurance($insuranceId: Int!) {
    insurancesByPk(id: $insuranceId) {
      id
      description
      firstInstallment
      secondInstallment
      price
      startDate
      endDate
      suspensionDate
      reactivationDate
    }
  }
`
