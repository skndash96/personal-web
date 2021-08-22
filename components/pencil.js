import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cylinder(props) {
    return (
        <mesh position={props.position}>
            <cylinderGeometry args={props.args} />
            <meshStandardMaterial
                roughness={props.roughness || 0.75}
                metalness={props.metalness || 0.1}
                color={props.color}
            />
        </mesh>
    );
}

function Model() {
    const groupRef = useRef();

    let [angleX, add] = [0, true];
    useFrame(() => {
        let movement = Math.random() * 0.025;

        if (angleX > 0.2 && add) {
            add = false;
            angleX -= movement;
        } else if (angleX < -0.2 && !add) {
            add = true;
            angleX += movement;
        } else {
            if (add) angleX += movement;
            else angleX -= movement;
        }

        groupRef.current.rotation.x = -angleX;
        groupRef.current.rotation.z = movement / 2.5;
    });

    return (
        <group ref={groupRef} scale={0.2}>
            <Cylinder
                metalness={0.5}
                position={[0, 13, 0]}
                args={[1, 1, 1]}
                color="#555555"
            />
            <Cylinder
                roughness={1.0}
                metalness={0.35}
                position={[0, 5, 0]}
                args={[1, 1, 15]}
                color="#ea503b"
            />
            <Cylinder
                roughnesz={1.0}
                position={[0, -3.25, 0]}
                args={[1, 0.6, 2]}
                color="#8d6f37"
            />
            <Cylinder
                metalness={1.0}
                position={[0, -4.8, 0]}
                args={[0.6, 0.1, 1.25]}
                color="black"
            />
        </group>
    );
}

export default function Pencil() {
    return (
        <Canvas mode="concurrent" camera={{ far: 100 }}>
            <ambientLight />
            <pointLight position={[-4, -4, 10]} intensity={0.75} />
            <spotLight position={[2, 2, 0]} intensity={1} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
}
