import Link from 'next/link'
import React,{useEffect} from 'react'
import {useRouter} from 'next/router'

function NotFound() {
     const router=useRouter();
     useEffect(() => {
          setTimeout(()=>{
               // router.go()
               router.push('/')
          },3000)
     }, [])
     return (
          <div className="not-found">
               <h1>Oopss.....</h1>
               <h2>That page can't be found</h2>
               <p>Go back to the Home page <Link href="/"><a>Home</a></Link></p>
          </div>
     )
}

export default NotFound
