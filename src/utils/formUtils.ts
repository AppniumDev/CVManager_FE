import * as Yup from 'yup'

export const isRequiredYup = (
  schema: Yup.ObjectSchema<any>,
  fieldName: string
) => {
  return schema.fields[fieldName]?.exclusiveTests.required || false
}

export const decodePrice = (price: number) => {
  return parseFloat((price / 100).toString())
}

export const encodePrice = (price: number) => {
  return parseInt((price * 100).toString())
}
