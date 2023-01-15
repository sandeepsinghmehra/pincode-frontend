import React from 'react'
import {Helmet} from "react-helmet";


const About = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About Us</title>
            <meta name="description" content="pincode india about us" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <main>
            <div>About Us</div>
        </main>
    </div>
  )
}

export default About;