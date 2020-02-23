import React from 'react'
import styled from 'styled-components'

import iconRestaurant from "./assets/icon-restaurant.svg"
import iconCafe from "./assets/icon-cafe.svg"
import iconMarket from "./assets/icon-market.svg"
import iconClub from "./assets/icon-club.svg"
import iconBar from "./assets/icon-bar.svg"

const Icon = styled.img `
	height: 30px;
	width: 30px;
	margin: 0px;
	margin-right: 10px;
`

const TypeIcon = ({ type }) => {
  let typeIcon = null
  switch (type) {
    case "Restaurant":
      typeIcon = <Icon src={iconRestaurant} alt={type} />
      break
    case "Bar":
      typeIcon = <Icon src={iconBar} alt={type} />
      break
    case "Cafe":
      typeIcon = <Icon src={iconCafe} alt={type} />
      break
    case "Market":
      typeIcon = <Icon src={iconMarket} alt={type} />
      break
    case "Club":
      typeIcon = <Icon src={iconClub} alt={type} />
      break
  }
  return typeIcon
}

export default TypeIcon