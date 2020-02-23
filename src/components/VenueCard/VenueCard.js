import React from "react"
import styled from 'styled-components'
import TypeIcon from "./TypeIcon"
// import PropTypes from "prop-types"
import Img from "gatsby-image"


const Card = styled.div`
  background-color: #f9fafc;
  margin-bottom: 24px;
  max-width: 600px;
	color: #131b27;
	display: grid;
	grid-template-columns: 1fr 230px;
`

const DistrictLabel = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
	color: #131b27;
	margin-bottom: 12px;
`

const VenueTitle = styled.h2`
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 42px;
	color: #131b27;
	margin-bottom: 0px;
`

const CuisineLabel = styled.label`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #546a8b;
`

const TextContainer = styled.div`
	margin-bottom: 28px;
`

const InformationContainer = styled.div`
  padding: 20px;
`

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #222;
	background-image: url(${props => props.src});
	background-size: cover;
`


const VenueCard = ({ data }) => {
	// console.log(data)
	let districts = []
	let districtLabel = null
	let cuisines = []
	let cuisinesLabel = null
	let typeLabel = null
	let cost = data.Cost || null

	if(data.District.length){
		data.District.forEach(district => {
			districts.push(district.data.Name)
		});
	}
	if(data.District && districts.length){
		districtLabel = <DistrictLabel>{districts.join("/")}</DistrictLabel>
	}

	if(data.Cuisine && data.Cuisine.length){
		data.Cuisine.forEach(cuisine => {
			cuisines.push(cuisine.data.Name)
		});
	}
	if(cuisines.length){
		cuisinesLabel = <CuisineLabel>{cuisines.join(", ")}</CuisineLabel>
	}

	if(data.Type && data.Type.length){
		typeLabel = data.Type.map(type => <TypeIcon type={type} key={type}/>)
	}

	let image = null
	if (
    data.Pictures &&
		data.Pictures.localFiles && 
		data.Pictures.localFiles.length > 0 &&
		data.Pictures.localFiles[0].childImageSharp
  ) {
    image = (
      <Img
        fluid={data.Pictures.localFiles[0].childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
				alt={data.Name}
      />
    )
  } else if (data.Pictures && data.Pictures.raw && data.Pictures.raw[0].url) {
			// contingency for images that can't be optimised
			image = (<img
				src={data.Pictures.raw[0].url}
				alt={data.Name}
			/>)
	}
    return (
      <Card>
        <InformationContainer>
          <TextContainer>
            {districtLabel}
            <VenueTitle>{data.Name}</VenueTitle>
            {cuisinesLabel}
          </TextContainer>

          <div>
            {/* <img src={iconRestaurant} alt="restautant"/> */}
            {typeLabel}
            {cost}
          </div>
        </InformationContainer>
        <div>{image}</div>
      </Card>
    )
}

// VenueCard.PropTypes = {
// 	data: PropTypes.object
// }

export default VenueCard