import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Header() {
     return (
          <header>
               <nav>
                    <div className="logo">
                         {/* <img src="/next-js.svg" alt="next logo"/> */}
                         <Image src="/next-js.svg" width={70} height={70} />
                    </div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/ninjas"><a>Ninjas</a></Link>
               </nav>
          </header>
     )
}

export default Header
