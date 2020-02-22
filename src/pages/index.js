import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Venue = ({ data }) => {
  let label = "";
  
  if(data.District.length && data.District[0].data.Name){

    label = <label>{data.District[0].data.Name}</label>
  }
  console.log(data)
  return (
    <div>
      {label}
      <h4>{data.Name}</h4>
    </div>
  )
}

const VenueList = ({ venues }) => {
  let venueList = venues.map((venue) => {
    return <Venue data={venue.node.data} />
  })
  return(
  <div>
    {venueList}
  </div>
  )
}

const IndexPage = ({ data }) => (
  <div style={{ margin: "auto", width: "960px" }}>
    <SEO title="Home" />
    <h1> Best Venues of London</h1>
    <p>A guide to restaurants, bars, cafes and clubs</p>
    <VenueList venues={data.allAirtable.edges} />
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Venues" } }) {
      edges {
        node {
          data {
            Name
            District {
              data {
                Name
              }
            }
          }
        }
      }
    }
  }
`