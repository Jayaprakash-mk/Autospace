import { BaseComponent } from '@autospace/util/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export const UserInfo = ({ children, className }: BaseComponent) => {
  const session = useSession()
  const image = session.data?.user?.image
  const name = session.data?.user?.name
  const email = session.data?.user?.email
  //   const uid = session.data?.user?.uid
  return (
    <div className={`flex gap-2 ${className}`}>
      <Image
        src={image || '/user.png'}
        alt=""
        width={300}
        height={300}
        className="w-16 h-16 object-cover border"
      />
      <div>
        <div>{name}</div>
        <div className="text-sm text-gray">{email}</div>
      </div>
      {children}
    </div>
  )
}
