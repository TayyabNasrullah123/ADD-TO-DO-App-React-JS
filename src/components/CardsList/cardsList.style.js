import styled from 'styled-components';

export const Button = styled.button`
background:transparent;
border-radius: 3px;
border: 2px solid black;
color:black;
margin: 0.5em 1em;
padding:0.25em 1em;
cursor: pointer;
font-size:1.3rem;
:hover {
    box-shadow: #333 0px 8px 24px;
    transition: all 300ms ease 0s;
    transform: scale(1.01) translateY(-5px);
}
`;