import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag('restaurants')

  return Response.json({success: true})
}
