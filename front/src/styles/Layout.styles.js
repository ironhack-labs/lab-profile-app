import styled from "styled-components"
import bg from "../public/oval-bg.png"

export const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
background-image: linear-gradient(to right, #C1DFC4, #DEECDD);

.site-layout-content {
  background-image: url(${bg});
  background-position:center;
  background-repeat:no-repeat;
  padding: 24px;
  height:60vh;
  display:flex;
}
`
export const Card = styled.div`
padding:10vh 15vw;
`