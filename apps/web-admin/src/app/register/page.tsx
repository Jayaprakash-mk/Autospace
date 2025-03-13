import { RegisterForm } from '@autospace/ui/src/components/templates/RegisterForm'
import { AuthLayout } from '@autospace/ui/src/components/molecules/AuthLayout'
import React from 'react'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
