import styled, { css } from "styled-components";
import { AniBorn } from "../animation/SphereAni";

const ShpereRoom = styled.div`
    position: fixed;
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
        border-radius: 100%;

        ${css`
            animation: ${AniBorn} .3s forwards;
        `};
    }
`;

const TitleBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    position: absolute;

    color: white;
    font-size: 2rem;
    line-height: 1.55rem;

    & > h1 {
        text-shadow: 2px 2px 2px gray;
        transform: translateZ(-150px);
    }
`;

export {
    ShpereRoom,
    SphereBox,
    TitleBlock,
}