import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Log request details
    console.log('=== Webhook Request Received ===')
    console.log('Method:', request.method)
    console.log('URL:', request.url)
    console.log('Headers:', Object.fromEntries(request.headers.entries()))
    
    // Get and log the request body
    const body = await request.text()
    console.log('Body:', body)
    
    // Try to parse as JSON if possible
    if (body) {
      try {
        const jsonBody = JSON.parse(body)
        console.log('Parsed JSON Body:', jsonBody)
      } catch (e) {
        console.log('Body is not valid JSON')
      }
    }
    
    console.log('=== End Webhook Request ===')
    
    // Return ok response
    return NextResponse.json({ message: 'ok' })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 