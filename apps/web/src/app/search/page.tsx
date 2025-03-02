import { SearchPage } from '@autospace/ui/src/components/templates/SearchPage'
import { FormProviderSearchGarage } from '@autospace/forms/src/searchGarages'
import React from 'react'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}
