import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
      <div> 
          <h1>The landing page</h1>
          <Link href="/dashboard">Go to the dashboard</Link>
    </div>
  )
}

export default LandingPage