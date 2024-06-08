// src/pages/index.js
import * as React from 'react'
//import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout';
//import axios from 'axios';
//import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {

  //const [menuppals, setMenuppals] = useState([]);
    return (
        <Layout  page = "index" />
        )
}


export const Head = () => <title>Sitio Diepal</title>

export default IndexPage