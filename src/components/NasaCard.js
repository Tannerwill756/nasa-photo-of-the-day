import React from "react";
import styled from 'styled-components';
import img from '../images/background2.jpg';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



//styling
const ParentDiv = styled.div`
    background-image:url(${img});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
    background-attachment: fixed;
`;

const MainStyling = styled.div`
    max-width:1050px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:black;
`;

const HeaderStyling = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

`;

const HeaderParaStyling = styled.p`
    margin-right:10%;
    font-size: 1.5rem;
`;

const DescripStyling = styled.p`
    line-spacing:3%;
    font-size: 1.3rem;
`;


//end styling

const NasaCard = props => {
    console.log(props)
    return (
        <ParentDiv>
            <MainStyling className = "nasaCard">
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <HeaderStyling>
                    <h1>{props.title}</h1>
                    <HeaderParaStyling>{props.date}</HeaderParaStyling>    
                </HeaderStyling>
                
                <img src={props.img} alt="" />
                <DescripStyling>{props.explan}</DescripStyling>
                <span class="badge badge-secondary">Copyright {props.copyright}</span>
            </MainStyling>
        </ParentDiv>
    )
}

export default NasaCard;