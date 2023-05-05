export const Country =(countryData) =>({
  type:'country',
  payload:countryData,
})

export const Details =(data) =>({
  type:'details',
  payload:data,
})

export const Country2 =(countryData) =>({
  type:'updateCountry',
  payload:countryData,
})

export const Details2 =(data) =>({
  type:'updateDetails',
  payload:data,
})