import React from 'react'
import { SearchHome } from '../components/SearchHome';
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Disclaimer</title>
            <meta name="description" content="All the information on this website - https://pincode-india.vercel.app - is published in good faith and for general information purpose only. Pincode India does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Pincode India), is strictly at your own risk. Pincode India will not be liable for any losses and/or damages in connection with the use of our website." />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <SearchHome />
    </div>
  )
}

export default Home;