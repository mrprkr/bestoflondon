import React from "react"
// import { Link } from "gatsby"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import VenueCard from "../components/VenueCard"
import {Helmet} from "react-helmet"


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

const Heading = styled.h1`
  font-family: "IBM Plex Serif";
  font-weight: 400;
  color: #131b27;
  margin-bottom: 6px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 24px;
  padding-bottom: 24px;
  @media (max-width: 640px){
    flex-direction: column;
    align-items: flex-start
  }
`



const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="All Venues" />

    <Header>
      <div>
        <Heading>Best Venues of London</Heading>
        <p>
          {data.allAirtable.edges.length} of the best restaurants, bars, cafes
          and clubs
        </p>
      </div>
      <div>
        <p>
          <a
            href="https://airtable.com/shrvwCH92iV3SJBUe"
            target="_blank"
            rel="noopener noreferrer"
          >
            + Suggest a venue
          </a>
        </p>
      </div>
    </Header>
    <hr />
    <VenueList venues={data.allAirtable.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
         query {
           allAirtable(
             filter: { table: { eq: "Venues" } }
             sort: { fields: [data___District___data___Name, data___Name] }
           ) {
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