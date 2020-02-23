import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components"
import MapContainer from '../components/MapContainer'
import Layout from "../components/layout"
import Helmet from 'react-helmet'

const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

const SecondPage = ({ data }) => (
  <Layout>
    <Helmet>
      <link
        href="https://api.mapbox.com/styles/v1/prkr/ck6zhz5880zux1ilej2p9nzsz.html?fresh=true&title=copy&access_token=pk.eyJ1IjoicHJrciIsImEiOiJjajhva3U1NHowNDlyMnhvMDRyOHlhaXpyIn0.OaV3cGWgNo2uze1RYA4Pxg"
        rel="stylesheet"
      />
    </Helmet>
    <Header>
      <h1>Map View</h1>
    </Header>
    <MapContainer lat={51.52441} lng={-0.07425} />
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allAirtable(
      filter: { data: { Name: { eq: "Allpress" } } }
      sort: { fields: [data___District___data___Name, data___Name] }
    ) {
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
