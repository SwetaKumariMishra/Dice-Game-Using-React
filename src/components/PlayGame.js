import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const PlayGame = () => {
  return (
   <MainContainer>
   <div className='top-section'>
    <TotalScore />
    <NumberSelector />
    </div>
   </MainContainer>
    
  )
}

export default PlayGame

const MainContainer = styled.main`
padding-top: 70px;
.top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
`