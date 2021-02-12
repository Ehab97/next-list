import Head from 'next/head'
import React from 'react'

function HeadInfo({data,title}) {
     return (
          <Head>
               <title>Next-list | {title}</title>
               <meta name="keywords" content={data}/>
          </Head>
     )
}

export default HeadInfo
