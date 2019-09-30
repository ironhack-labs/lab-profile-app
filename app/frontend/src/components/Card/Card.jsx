import React from 'react'
import styled from 'styled-components'
import background from '../../assets/images/oval-bg.png'

const StyledCard = styled.div`
  @media (min-width: 992px) {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: center 90%;
  }
`

const Card = ({ children }) => {
  return (
    <StyledCard className='card p-5 border-0'>
      <div className='row'>{children}</div>
    </StyledCard>
  )
}

export default Card
