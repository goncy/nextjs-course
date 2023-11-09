'use client'

export default async function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return (
    <div>Something went wrong, try again!</div>
  )
}
