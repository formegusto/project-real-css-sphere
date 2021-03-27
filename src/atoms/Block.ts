import styled, { css } from "styled-components";
import { AniBorn } from "../animation/SphereAni";

const ShpereRoom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    perspective: 800px;
`;

const SphereBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;

    & > .sphere {
        position: absolute;

        box-sizing: border-box;
        border: 3px solid black;
        border-radius: 100%;

        ${css`
            animation: ${AniBorn} .3s forwards;
        `};
    }
`;

export {
    ShpereRoom,
    SphereBox,
}