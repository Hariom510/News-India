import React from 'react'
import styled from 'styled-components'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';


function Footer() {
  return (
    <Container>
        <div className="parent">
        <div className="f-icons"> 
            <a href="https://www.linkedin.com/in/hariom510/"><Linkedin color='white' size='3rem' /></a>
            {/* <a href="https://github.com/Hariom510"><Github color='white' size='3rem' /></a> */}
            <a href="https://www.instagram.com/hariom_510/"><Instagram color='white' size='3rem' /></a>
        </div>
        
    <span>Copyright &#169; 2022 Hariom Kumar</span>
    </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    height: 30vh;
    background: #092540;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    /* margin-bottom: -5rem; */
    .parent{
        margin-top: 2.5rem;
        /* margin-bottom: .5rem; */
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .f-icons{
        display: flex;
        justify-content: center;
        
        gap: 2rem;
    }
    
`;