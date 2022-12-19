import { Image } from '@chakra-ui/react'
import React from 'react'
import load from "../Assets/load.gif"

export const Loading = () => {
  return (
    <div style={{width:"600px",height:"200px", margin:"auto",marginTop:"160px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image src={load} />
    </div>
  )
}
