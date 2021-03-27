import React, { useCallback, useEffect, useRef, useState } from 'react';
import SphereRoomComponent from '../components/SphereRoomComponent';
import { SphereFactory } from '../types/SphereType';

function ShereRoomContainer() {
    const [sphere, setSphere] = useState<SphereFactory>({
        rotY: 0,
    });
    const refBox = useRef<HTMLDivElement>(null);
    const refSphere = useRef<HTMLDivElement>(null);

    const spinSphereListener = useCallback(function(this:HTMLDivElement){
        this.removeEventListener('transitionend',spinSphereListener);
        setSphere({
            rotY: sphere.rotY + 10
        });
        if(refBox.current) {
            const newSphere = document.createElement("div");
            newSphere.classList.add("sphere");
            newSphere.style.transform = "rotateY(" + sphere.rotY + "deg)";

            refBox.current.appendChild(newSphere);
        }
    }, [sphere])

    useEffect(() => {
        if(refSphere.current)
            refSphere.current.addEventListener('transitionend', spinSphereListener);
    }, [spinSphereListener]);

    return <SphereRoomComponent 
        refBox={refBox}
        refSphere={refSphere}
        sphere={sphere}
    />
}

export default ShereRoomContainer;