
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
export async function POST(req, res) {
    const body = await req.json()
    const { partNumber } = body
    const path = `/parts/${partNumber}`
    console.log(path)
       
        try {
          revalidatePath(path)
          return NextResponse.json({ revalidated: true })
        } catch (err) {
            console.log(err)
          return NextResponse.json({ error: err.message })
        }
    }