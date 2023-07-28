import React from 'react'
import KeyFeaturesImg from "../images/keyfeatures.png"
import "./keyfeatures.css"
const keyfeatures = () => {
  return (
    <div className='keyfeatures-container'>
        <h1>Key features</h1>
        <p>Manage your data with Agens Enterprise Package
Essential enterprise features such as high availability and sharding are provided</p>

<div className='features-img-container'> 
<img src={KeyFeaturesImg} alt="keyfeaturesimage" />
</div>

    </div>
  )
}

export default keyfeatures