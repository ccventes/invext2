// src/pages/index.js
import * as React from 'react'
//import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout';
//import axios from 'axios';
//import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {
  const data ={

    pagina: 'index',
    visible: false,
  }
  //const [menuppals, setMenuppals] = useState([]);
    return (
        <Layout  data ={data} />
        )
}


export const Head = () => <title>Sitio Diepal</title>

export default IndexPage