import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VenueCard from "../components/VenueCard"

const VenueList = ({ venues }) => {
  let venueList = venues.map(venue => {
    return <VenueCard data={venue.data} key={venue.id} />
  })
  return <div>{venueList}</div>
}

const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Cafes" />
    <Header>
      <h1>Cafes</h1>
    </Header>
    <VenueList venues={data.allAirtable.nodes} />
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allAirtable(filter: {data: {Type: {eq: "Cafe"}}}, sort: {fields: [data___District___data___Name, data___Name]}){
      nodes {
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
`