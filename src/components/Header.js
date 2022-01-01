import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
     const[burgerStatus,setburgerStatus]=useState(false)
     return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
            <a  href="#">Model S</a>
            <a  href="#">Model 3</a>
            <a  href="#">Model X</a>
            <a  href="#">Model Y</a>
            <a  href="#">Solar Roofs</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Telsa Account</a>
                <CustomMenu onClick={()=>{
                  setburgerStatus(true);
                }}>
                </CustomMenu>
            </RightMenu>
            <NavBurger show={burgerStatus}>
            <CloseWrapper>
            <CustomClose onClick={()=>{
                  setburgerStatus(false);
                }}></CustomClose>
            </CloseWrapper>
           
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>  
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Tesla Account</a></li>
               
            </NavBurger>
        </Container>
    )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index:1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left:80px;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    margin: 0 10px;
  }
  @media (max-width: 415px) {
    a{
      display: none;
    }
  }
 
  @media (max-width: 550px) {
    font-size:15px;
    margin:0px 0px 0px 20px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-left:20px;
`; 
const NavBurger=styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  list-style:none;
  z-index:3000;
  display: flex;
  padding:20px;
   flex-direction:column;
  text-align:start;
   transform:${props=>props.show ? 'translateX(0)': 'translateX(100%)'};
   transition: transform 0.3s;  
   li{
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,0,0.2);

      a{
          font-weight:600;
      }
    
  }
 

`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
` 

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`