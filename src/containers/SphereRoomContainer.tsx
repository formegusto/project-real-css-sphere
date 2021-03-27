import React, { useCallback, useEffect, useRef, useState } from 'react';
import SphereRoomComponent from '../components/SphereRoomComponent';
import { SphereFactory } from '../types/SphereType';

function ShereRoomContainer() {
    const [sphere, setSphere] = useState<SphereFactory>({
        startY: 0,
        rotY: -60,
        rotZ: 0,
    });
    const refBox = useRef<HTMLDivElement>(null);
    const refSphere = useRef<HTMLDivElement>(null);

    const bornSphereListener = useCallback(function(this:HTMLDivElement) {
        this.removeEventListener('animationend', bornSphereListener);
        if(sphere.rotY >= 360){
            setSphere({
                ...sphere,
                rotY: sphere.startY,
                rotZ: sphere.rotZ + 45
            });
        } else if(sphere.rotZ >= 360) {
            setSphere({
                startY: sphere.startY + 15,
                rotY: sphere.startY,
                rotZ: sphere.rotZ + 45
            });
        } else {
            setSphere({
                ...sphere,
                rotY: sphere.rotY + 80
            });
        }
    }, [sphere]);

    const spinSphereListener = useCallback(function(this:HTMLDivElement){
        this.removeEventListener('transitionend',spinSphereListener);
        if(refBox.current) {
            const newSphere = document.createElement("div");
            newSphere.classList.add("sphere");
            newSphere.style.transform = "rotateY(" + sphere.rotY + "deg) rotateX(" + sphere.rotZ + "deg)";
            newSphere.style.border = `3px solid rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            newSphere.addEventListener('animationend', bornSphereListener);

            refBox.current.appendChild(newSphere);
        }
    }, [sphere, bornSphereListener]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const pageX = window.pageXOffset;
            const pageAllX = document.body.scrollWidth - window.innerWidth;

            const pageY = window.pageYOffset;
            const pageAllY = document.body.scrollHeight - window.innerHeight;

            const boxX = 360 * (pageX / pageAllX);
            const boxY = 360 * (pageY / pageAllY);

            console.log(boxY);
            console.log(pageY);
            console.log(pageAllY);
            if(refBox.current) {
                refBox.current.style.transform = "rotateX("+ boxY +"deg) rotateY(" + boxX + "deg)";
            }
        });
      }, []);

    useEffect(() => {
        if(refSphere.current)
            refSphere.current.addEventListener('transitionend', spinSphereListener);
    }, [spinSphereListener]);

    /* 두개씩 만들어지는 문제가 있음. 근데 갬성 있어서 놔둠. */
    useEffect(() => {
        setTimeout(() => {
            setSphere({
                ...sphere,
                rotY: 0,
                rotZ: sphere.rotZ + 45
            });
        }, 1000);
    }, // eslint-disable-next-line 
    []); 

    return <SphereRoomComponent 
        refBox={refBox}
        refSphere={refSphere}
        sphere={sphere}
    />
}

export default ShereRoomContainer;