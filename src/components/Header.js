import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <Link style={{textDecoration: 'none'}} to="/" > 
            <div className='anchorHead'>
                <img className='iconImg same' src='images/news.png' alt ="" />
            NEWS <span style={{color:'#ff9600', fontSize: "2rem", fontWeight: 'bold'}}>INDIA</span></div>
            </Link>
            <Menu>
            {/* <Link href="/" passHref>
            <a href="replace">Go to my amazing page</a>
            </Link> */}
            {/* <Link to='/' >Home</Link>
            
             */}
            </Menu>
            <RightMenu>
                <InsideMenu>
                <Link to="/" >HOME </Link>
                <Link to="/sports">SPORTS <a href="#"></a></Link>
                <Link to="/entertainment">ENTERTAINMENT </Link>
                <Link to="/science">SCIENCE <a href="#"></a></Link>
                </InsideMenu>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <li><Link to="/" >HOME <a href="#"></a></Link></li>
                <li><Link to="/sports">SPORTS <a href="#"></a></Link></li>
                <li><Link to="/entertainment">ENTERTAINMENT </Link></li>
                <li><Link to="/science">SCIENCE <a href="#"></a></Link></li>
                <li><Link to="/business">BUSINESS <a href="#"></a></Link></li>
                <li><Link to="/technology">TECHNOLOGY <a href="#"></a></Link></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 12vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    top:0;
    left:0;
    right: 0;
    z-index: 1;
    background: white;
    color: #2b3d52;
    
    box-shadow: 0px 4px 8px 1px rgb(0 0 0 / 30%);

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;


`
const RightMenu = styled.div`
        display:flex;
        align-items: center;
        margin-right: 1.4rem;
        a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 7px;
        text-decoration:none;
        color: #2b3d52;
        
    }
    a:hover{
        color:#ff9600;
    }

`
const InsideMenu = styled.div`
   @media(max-width: 768px){
    display:none;
}
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color: #2b3d52;
    &:hover{
        color: #ff9600;
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background:#fff;
    color: #2b3d52;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    /* border: 2px solid #2b3d52;
    border-radius: 6px; */

    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        margin: 1px 2px;
        /* border-bottom: 1px solid #2b3d52; */

        a{
            font-weight: 600;
            text-decoration: none;
            color: #2b3d52;
        }
        a:hover{
            color:#ff9600;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: #2b3d52;
    margin-right: 1.1rem;
    margin-bottom: 1rem;
    margin-top: .6rem;
    &:hover{
        color: #ff9600;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`