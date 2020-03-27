import React from 'react'
import styled from "styled-components"

const Container = styled.div`
width:100%;
height:100vh;
background-image: linear-gradient(to right, #C1DFC4, #DEECDD);
`

export const Layout = ({ children }) => (<Container>{children}</Container>);