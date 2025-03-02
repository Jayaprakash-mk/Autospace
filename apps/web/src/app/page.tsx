'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import {
  CompaniesDocument,
  SearchGaragesDocument,
} from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import { Sidebar } from '@autospace/ui/src/components/organisms/Sidebar'
import Link from 'next/link'

export default function Home() {
  const { data } = useQuery(CompaniesDocument)
  const { data: sessionData } = useSession()

  const { data: garages } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '12-05-2025', start: '01-01-2025' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })
  return (
    <main className="p-8">
      <div className="mb-2">
        {sessionData?.user?.uid ? (
          <Button onClick={() => signOut()}>Signout</Button>
        ) : (
          <Link href="/login" className="bg-red-400 p-2 rounded-sm">
            Login
          </Link>
        )}
        {/* <BrandIcon />
      <Button>Hello</Button> */}
      </div>
      <div>
        <Sidebar
          open={false}
          setOpen={function (open: boolean): void {
            throw new Error('Function not implemented.')
          }}
          children={undefined}
        ></Sidebar>
      </div>
      {/* Hello User: {add(25, 24)} */}
      <div>
        {garages?.searchGarages.map((garage) => (
          <pre key={garage.id}>JSON.stringfy(garage,null,2)</pre>
        ))}
      </div>
      <div>
        {data?.companies.map((company) => (
          <div key={company.id}>
            <div>{company.displayName}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
