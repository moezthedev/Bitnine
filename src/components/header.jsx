import React from 'react'
import "./header.css"
import Agensql from "../images/Agensql.png"
const header = () => {
  return (
    <div className='header-container'>
    
<img src={Agensql} alt="agensql-logo" />

    <h2>An integration of Bitnine’s DB technology and PG expertise</h2>
    <div className='header-paras-container'>
    <p>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise
and knowledge accumulated through database research and development.</p>
    <p>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures
the efficiency and scalability of data management.</p>
<p>Get AgensSQL now for stable operation and management services at a reduced
maintenance cost.</p>
</div>
<div className='header-btns-container'>
<a href="/">CONTACT</a>
<a href="/">BROCHURE</a>
<a href="/">BLOG</a>
</div>

    </div>
  )
}

export default header