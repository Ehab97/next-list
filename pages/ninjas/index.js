import Link from 'next/link';
import React from 'react'
import HeadInfo from '../../components/HeadInfo'
import Style from '../../styles/Ninjas.module.css'

export const getStaticProps=async()=>{
     const res=await fetch('https://jsonplaceholder.typicode.com/users');
     const data=await res.json();

     return {
          props:{
               //here creat data whci can be accible inside compnent
               ninjas:data
          }
     }
}

function Ninjas({ninjas}) {
     return (
          <>
          <HeadInfo title="Ninjas" data="Ninjas Content"/>
          <div>
               <h2>All ninjas</h2>
               {
                    React.Children.toArray(
                         ninjas.map(ninja=>(
                              <Link href={'/ninjas/'+ninja.id}>
                                   <a className={Style.single}>
                                        <h3>{ninja.name}</h3>
                                   </a>
                              </Link>
                         ))
                    )
               }
          </div>
          </>
     )
}

export default Ninjas
