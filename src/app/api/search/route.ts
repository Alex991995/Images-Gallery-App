import { NextResponse } from "next/server";

export  async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const query = searchParams.get("query")
  const order = searchParams.get("order_by")

  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&order_by=${order}&client_id=${process.env.CLIENT_ID}`)
  const data = await response.json()
  console.log(data)
  return NextResponse.json(data)

}

