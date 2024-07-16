import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import _default from '../../themes/default';

export const Nav = styled.div`
  height: 60px;
  display: flex;
  background-color: #ffc470;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    // padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    padding-top:1.1rem;
    background-color: ##FFFF80;
    align-items: center;
    justify-content:center;
    gap: 32px;
    // padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: #FFFF80;
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

// export const ToggleButton = styled.button`
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 40px; /* Adjust height as needed */
//   border-radius: 20px;
//   color: ${({ theme }) => theme.white};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;
  
//   /* Toggle button specific styles */
//   background-color: ${({ theme, darkMode }) => darkMode ? theme.background1 : theme.primary}; /* Set background based on darkMode */
//   color: ${({ theme, darkMode }) => darkMode ? theme.white : theme.white}; /* Set text color based on darkMode */

//   :hover {
//     background: ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.white};     
//   }

//   @media screen and (max-width: 768px) { 
//     font-size: 14px;
//   }
// `;


export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  gap: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    width: 100%; // Adjust width for smaller screens
    gap: 1rem; // Reduce gap
    justify-content: center; // Center the button on smaller screens
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 60px; // Default width
  height: 30px; // Default height
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 50px; // Smaller width for mobile devices
    height: 25px; // Smaller height for mobile devices
  }
`;

export const ToggleCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #ED9455;
  position: absolute;
  left: ${props => props.darkMode ? 'calc(100% - 28px)' : '2px'};
  transition: left 0.3s ease;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 23px; // Smaller circle for mobile devices
    height: 23px; // Smaller circle for mobile devices
  }
`;

export const Icon = styled.div`
  color: ${props => props.theme.darkMode ? 'white' : 'black'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: opacity 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.position};
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 0.75em; // Smaller icon size for mobile
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 61px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: #ffffff;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;