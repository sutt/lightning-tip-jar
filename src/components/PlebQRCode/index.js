import useSWR from 'swr'
import Image  from 'next/image'
import { useState } from 'react'
import useClipboard from "react-use-clipboard";

// import styles from './styles.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function PlebQrCode() {

    const { data, error } = useSWR('/api/merch-lnp/get-lnp', fetcher)

    const [isCopied, setCopied] = useClipboard(
      data ? data.lnUrl : "", 
      {successDuration: 1000},
    )
  
  if (error) return <div>could not load recent payments</div>
  if (!data) return <div>loading...</div>
  if (!data.image) return <div>Unable to fetch recent payments</div>

  return (
    <div className="payment-container">
      
      <Image src={data.image} alt="Login Code" width={300} height={300} />
      
      {/* <p>{data.lnUrl}</p> */}
      
      <div className="copy-lnurl-container">
      
        <button onClick={setCopied} style={{"margin": "10px"}}>
          {isCopied ? "Copied!" : "Copy LN-URL"}
        </button>        
      
      </div>
    
    </div>
  )
}