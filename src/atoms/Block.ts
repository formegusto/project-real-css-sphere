import styled from "styled-components";

const ShpereRoom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    perspective: 800px;
`;

const SphereBox = styled.div`
    position: absolute;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;

    & > .sphere {
        position: absolute;

        width: 300px;
        height: 300px;

        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 100%;
    }
`;

export {
    ShpereRoom,
    SphereBox,
}