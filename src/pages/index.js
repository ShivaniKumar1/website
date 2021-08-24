//Import React
import * as React from 'react'
import Layout from '../components/layout'

// Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Me.">
      <p>Hi, my name is </p>
      <h1>Shivani Kumar.</h1>
      <p>I am a senior computer science student at <a>https://www.ucf.edu/</a>University of Central Florida expecting to 
        complete my Bachelors degree in May 2022. Currently, I am a junior full-stack developer 
        at uClub focusing on building integrations and web development.</p>
    </Layout>
  )
}


// Export your component
export default IndexPage