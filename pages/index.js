import { Experience } from '@/comps/Experience'
import Main from '@/comps/Main'
import Our_products from '@/comps/Our_products'
import Our_services from '@/comps/Our_services'
import WhatWeOffer from '@/comps/WhatWeOffer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Main />
      <WhatWeOffer />
      <Our_products />
      <Our_services />
      <Experience />
    </>
  )
}
