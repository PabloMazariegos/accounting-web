import { NextResponse } from 'next/server'
import { processFile } from './service'

export async function POST(request){
  const formData = await request.formData()

  const type = formData.get('type')
  const file = formData.get('file')

  try{
    const result = await processFile({ type, file })
    console.log(result)
  }catch(error){
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return Response.json({})
}