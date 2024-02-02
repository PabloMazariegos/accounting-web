import environment from "@/config/environment"
import { fetchWithRetry } from "@/services/request.service"

export const getSales = async (payload) => {
  const url = new URL(`${environment.baseUrl}/accounting/v1/sales`)

  if(payload.fromDate){
    url.searchParams.append('from_date', payload.fromDate)
  }

  if(payload.toDate){
    url.searchParams.append('to_date', payload.toDate)
  }

  if(payload.documentNumber){
    url.searchParams.append('document_number', payload.documentNumber)
  }

  if(payload.serial){
    url.searchParams.append('serial', payload.serial)
  }

  if(payload.number){
    url.searchParams.append('number', payload.number)
  }

  if(payload.nit){
    url.searchParams.append('nit', payload.nit)
  }

  if(payload.clientName){
    url.searchParams.append('client_name', payload.clientName)
  }

  if(payload.amount){
    url.searchParams.append('amount', payload.amount)
  }

  if(payload.registerType){
    url.searchParams.append('register_type', payload.registerType)
  }

  if(payload.satFileId){
    url.searchParams.append('sat_file_id', payload.satFileId)
  }

  if(payload.status){
    url.searchParams.append('status', payload.status)
  }

  url.searchParams.append('page', payload.page || 0)
  url.searchParams.append('size', payload.size || environment.defaultPageSize)

  const response = await fetchWithRetry(url, { method: 'GET' })

  if (!response.ok) {
    throw response
  }

  return await response.json()
}

export const getPurchases = async (payload) => {
  const url = new URL(`${environment.baseUrl}/accounting/v1/purchases`)

  if(payload.fromDate){
    url.searchParams.append('from_date', payload.fromDate)
  }

  if(payload.toDate){
    url.searchParams.append('to_date', payload.toDate)
  }

  if(payload.documentNumber){
    url.searchParams.append('document_number', payload.documentNumber)
  }

  if(payload.documentType){
    url.searchParams.append('document_type', payload.documentType)
  }

  if(payload.serial){
    url.searchParams.append('serial', payload.serial)
  }

  if(payload.invoiceNumber){
    url.searchParams.append('invoice_number', payload.invoiceNumber)
  }

  if(payload.nit){
    url.searchParams.append('nit', payload.nit)
  }

  if(payload.clientName){
    url.searchParams.append('client_name', payload.clientName)
  }

  if(payload.amount){
    url.searchParams.append('amount', payload.amount)
  }

  if(payload.ivaAmount){
    url.searchParams.append('iva_amount', payload.ivaAmount)
  }

  if(payload.registerType){
    url.searchParams.append('register_type', payload.registerType)
  }

  if(payload.satFileId){
    url.searchParams.append('sat_file_id', payload.satFileId)
  }

  if(payload.status){
    url.searchParams.append('status', payload.status)
  }

  url.searchParams.append('page', payload.page || 0)
  url.searchParams.append('size', payload.size || environment.defaultPageSize)

  const response = await fetchWithRetry(url, { method: 'GET' })

  if (!response.ok) {
    throw response
  }

  return await response.json()
}

export const getTaxForms = async (payload) => {
  const url = new URL(`${environment.baseUrl}/accounting/v1/tax-forms`)

  if(payload.fromDate){
    url.searchParams.append('from_date', payload.fromDate)
  }

  if(payload.toDate){
    url.searchParams.append('to_date', payload.toDate)
  }

  if(payload.number){
    url.searchParams.append('number', payload.number)
  }

  if(payload.accessNumber){
    url.searchParams.append('access_number', payload.accessNumber)
  }

  if(payload.type){
    url.searchParams.append('type', payload.type)
  }

  if(payload.id){
    url.searchParams.append('id', payload.id)
  }

  url.searchParams.append('page', payload.page || 0)
  url.searchParams.append('size', payload.size || environment.defaultPageSize)

  const response = await fetchWithRetry(url, { method: 'GET' })

  if (!response.ok) {
    throw response
  }

  return await response.json()
}