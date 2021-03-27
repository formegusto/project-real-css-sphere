import React from 'react';
import { ShpereRoom, SphereBox } from '../atoms/Block';
import { Sphere } from '../atoms/Sphere';
import { SphereFactory } from '../types/SphereType';

type Props = {
    refBox: React.Ref<HTMLDivElement>;
    refSphere: React.Ref<HTMLDivElement>;
    sphere: SphereFactory;
}

function SphereRoomComponent(props: Props) {
    return (
        <ShpereRoom>
            <Sphere 
                className="first"
                ref={props.refSphere}
                style={{
                    transform: "rotateY(" + props.sphere.rotY + "deg) rotateX(" + props.sphere.rotZ + "deg)"
                }}>
            </Sphere>
            <SphereBox
                ref={props.refBox}
            />
        </ShpereRoom>
    );
}

export default SphereRoomComponent;