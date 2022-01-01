import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Home = () => {
    return (
        <Container>
           <Section id="Model S"
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      ></Section>
      <Section id="Model X"
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      ></Section>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      ></Section>

      <Section
        title="Solar for New Roofs"
        description="Order Online for Solar Pannels"
        image="solar-panel.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      ></Section>
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        LeftButtonText="Shop Now"
      ></Section>
        </Container>
    )
}

export default Home


const Container = styled.div`
   height:100vh;


`