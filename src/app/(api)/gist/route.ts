import { Internal, Success } from '@/lib/http'

export async function GET() {
 const url = process.env.GIST || ''
 console.log(url)

 if (!url) {
  return Internal()
 }
 const res = await fetch(`${url}`, {
  method: 'GET',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  next: { revalidate: 3600 },
 })

 if (!res.ok) {
  return Internal()
 }
 const data = await res.json()
 return Success(data)
}
