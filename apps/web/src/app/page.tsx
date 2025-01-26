'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'

export default function Home() {
  const { data } = useQuery(CompaniesDocument)

  return (
    <main>
      <BrandIcon />
      <Button>Hello</Button>
      Hello User: {add(25, 24)}
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
