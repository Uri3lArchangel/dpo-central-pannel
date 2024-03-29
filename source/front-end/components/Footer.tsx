import Image from 'next/image'
import React from 'react'
import footerLogo from '../../../public/assets/dpo-logo-footer.png'
import ft from '../../../styles/Home/Footer.module.css'
import {CgMail, CgPhone} from 'react-icons/cg'
import Link from 'next/link'



function Footer() {
  return (
   <div className={ft.footerContainer}>
   <article className={ft.footerLayoutContainer}>
    <section>
      <figure className={ft.footerLogoContainer}>
        <Image src={footerLogo} alt='DPO' />
      </figure>
      <div>Toll Free: <CgPhone className={ft.icons} size={30} /> <Link href={'tel:+16473938417'}>1-877-317-2776</Link></div>
      <div><CgPhone className={ft.icons} size={30} /> <Link href={'tel:+16473938417'}>(437) 500 4414</Link></div>
      <div>Cell: <CgPhone className={ft.icons} size={30} /> <Link href={'tel:+16473938417'}> 647-393-8417</Link></div>

      <div>Email Us: <CgMail className={ft.icons} size={30} /><Link href={'mailto: adsco@directprivateoffers.ca'}>adsco@directprivateoffers.com</Link></div>
    </section>
    <section>
      <h4>List</h4>
      <Link href={'https://www.directprivateoffers.net/listing-process/'}>Process</Link>
      <Link href={'https://www.directprivateoffers.net/listing-costs/'}>Costs</Link>
      <Link href={'https://www.directprivateoffers.net/listing-support/https://www.directprivateoffers.net/listing-support/'}>Support</Link>
    </section>
    <section>
      <h4>Information</h4>
      <Link href={'https://www.directprivateoffers.net/about-us'}>About</Link>
      <Link href={'https://www.directprivateoffers.net/about/privacy'}>Privacy</Link>
      <Link href={'https://www.directprivateoffers.net/about/terms'}>Terms & Conditions</Link>
    </section>
   </article>
   <article className={ft.termsOfUse}>
   © 2024 DPO Global LLC, All Rights Reserved. Terms of Use | Privacy Policy
   </article>
   </div>
  )
}

export default Footer