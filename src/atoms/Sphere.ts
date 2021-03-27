import styled from "styled-components";

const Sphere = styled.div`
    width: 300px;
    height: 300px;

    border: 1px solid black;
    border-radius: 100%;
    
    transform-style: preserve-3d;
    transition: .5s;
`;

export {
    Sphere
}