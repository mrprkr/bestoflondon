import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import VenueCard from "../components/VenueCard"

const Venue = ({ data }) => {
  let label = "";
  let districts = []
  if(data.District && data.District.length && data.District[0].data.Name){
    data.District.forEach(district => districts.push(district.data.Name))
    label = <p style={{fontSize: '0.8rem', marginBottom: '4px'}}>{districts.join("/")}</p>
  }

  return (
    <div key={data} style={{ marginBottom: "24px" }}>
      {label}
      <h3 style={{ marginTop: "4px" }}>{data.Name}</h3>
    </div>
  )
}

const VenueList = ({ venues }) => {
  let venueList = venues.map((venue) => {
    return <VenueCard data={venue.node.data} key={venue.node.id} />
  })
  return(
  <div>
    {venueList}
  </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <br />
    <SEO title="Home" />
    <h1> Best Venues of London</h1>
    <p>A guide to restaurants, bars, cafes and clubs</p>
    <hr />
    <VenueList venues={data.allAirtable.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
         query {
           allAirtable(filter: { table: { eq: "Venues" } }) {
             edges {
               node {
                 id
                 data {
                   Name
                   Cuisine {
                     data {
                       Name
                     }
                   }
                   District {
                     data {
                       Name
                     }
                   }
                   Type
                   Cost
                   LGBT_Friendly
                   Pictures {
                     raw {
                       url
                     }
                     localFiles {
                       childImageSharp {
                         fixed {
                           width
                           height
                           src
                         }
                        fluid(maxWidth: 300, maxHeight: 220, fit: COVER) {
                          ...GatsbyImageSharpFluid
                          presentationWidth
                        }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `