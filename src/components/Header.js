import React ,{ useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
          <a key={index} href="#">{car}</a>
        ))}
        {/* <a href="#">Model S</a>        
        <a href="#">Model X</a>       
        <a href="#">Model Y</a>  
        <a href="#">Model 3</a>           */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>        
        <a href="#">Tesla Account</a> 
        <CustomMenu onClick={()=>setBurgerStatus(true )}/>            
      </RightMenu>
      <BurgerNav show ={burgerStatus}>
          <CloseBtn>
            <CustomClose onClick={()=>setBurgerStatus(false )}/>
          </CloseBtn>
          {/* <li><a href="#">Model 3</a></li>  
          <li><a href="#">Model X</a></li>  
          <li><a href="#">Model Y</a></li>  
          <li><a href="#">Model Z</a></li>   */}
          {cars && cars.map((car,index)=>(
          <li ley={index}><a href="#">{car}</a></li>
        ))}
          <li><a href="#">Existing Inventory</a></li>  
          <li><a href="#">Used Inventory</a></li>  
          <li><a href="#">Trade-in</a></li>  
          <li><a href="#">Cybertruck</a></li>  
          <li><a href="#">Roadster</a></li>  
          <li><a href="#">Semi</a></li>  
          <li><a href="#">Charging</a></li>  
          <li><a href="#">Power</a></li>  
          <li><a href="#">Community</a></li>  
          <li><a href="#">Utility</a></li>  
          <li><a href="#">Test Drive</a></li> 
      </BurgerNav> 


    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content : space-between;
    align-items: center;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const Menu = styled.div`
  display: flex;
  align-items: cemter;
  flex:1;
  justify-content:center;
  a{
    font-weight:600;
    text-transform: uppercase;
    padding:  0 10px;
    flex-wrap:nowrap;
  }

  @media(max-width : 768px){
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color: white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  text-align:start;
  flex-direction:column;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition :transform 0.2s ease-in;
  li{
    
    padding:15px 0;
    border-bottom : 1px solid rgba(0,0,0,0.2  );
    a{
      text-transform: uppercase;
      font-weight:600;
      
    }
  }


`
const CloseBtn = styled.div`
  display: flex;
  justify-content:flex-end;

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

