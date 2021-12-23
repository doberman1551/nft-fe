import React from 'react'
import Head from 'next/head'
import { Header } from './Header'
const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
        <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
     
      <div className="container mx-auto">{children}</div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'NFT Jobs and NFT Talent',
    description: 'Find the best NFT career opportunites and talents',
    keywords: 'nft, nft careers, nft jobs, web3',
  }

export default Layout
