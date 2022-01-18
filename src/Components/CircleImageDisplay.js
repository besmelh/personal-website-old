import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const StyledImageDisplay = styled.div`
    transition: transform 0.3s;
    display: flex;
    justify-content: center;

    & model-viewer{
        --poster-color: transparent;
    } 

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;


function CircleImageDisplay(props) {

    const navigate = useNavigate();

    const [circleHovered, setCircleHovered] = useState(true);

    const handleRoute = () =>{ 
        navigate(props.href || '/');
    }

    const handleMouseEnter = e => {
        setCircleHovered(false);
    }

    const handleMouseLeave = e => {
        setCircleHovered(true);
    }

    const {src, iosSrc, poster, alt, modelDimension, ...other} = props;

    return (
    
      <StyledImageDisplay style={other} onClick={handleRoute} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={props.className}>
        <model-viewer
            src={src}
            ios-src={iosSrc}
            poster={poster}
            alt={alt}
            shadow-intensity="0"
            auto-rotate
            style={{height: modelDimension, width: modelDimension}}
            className="poster"
            seamless-poster
            ></model-viewer>
        
      </StyledImageDisplay>
    );
  }
    
  export default CircleImageDisplay;