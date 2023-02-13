// nextjs
import Head from 'next/head'
// components
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'
import SocialMedia from '@/components/SocialMedia'
import BorderCard from '@/components/BorderCard'
import Introduction from '@/components/Introduction'
import Card from '@/components/Card'
import { Stack } from '@mui/system'
import Image from 'next/image'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>NengYi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,600;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <Page>
        <BorderCard 
            sx={{position: "relative",
            height: "60vh",
            width: "60vw",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p:2
            }}>
          <Navbar />
          <div style={{}}>
            <Introduction 
              sx={{
                position:"relative",
                justifyContent:"left",
                alignItems:"center"
              }}/>
          </div>
          <SocialMedia/>
        </BorderCard>
      </Page>
    </>
  )
}
