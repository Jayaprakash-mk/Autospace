'use client'

import { useSearchParams } from 'next/navigation'
import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/src/components/organisms/IsManager'
import { ListGarageBookings } from '@autospace/ui/src/components/templates/ListGarageBookings'

export default function Page() {
  const searchParams = useSearchParams()
  const garageId = Number(searchParams.get('garageId')) ?? 0

  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  )
}
