import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";

export function Layer(props) {
  const scale = 1;
  const planeSize = [800, 400];
  const ref = useRef();
  const [movement] = useState(() => new THREE.Vector3());
  const [temp] = useState(() => new THREE.Vector3());

  useFrame((state, delta) => {
    movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2);

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      state.mouse.x * 20,
      0.2 * props.factor
    );

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      state.mouse.y / 10,
      0.2 * props.factor
    );

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      -state.mouse.x / 2,
      0.2 * props.factor
    );
  });

  const texture = useTexture(props.texture);

  return (
    <group ref={ref}>
      <Plane scale={scale} args={planeSize} position-z={props.z}>
        <meshBasicMaterial map={texture} transparent={true} />
      </Plane>
    </group>
  );
}
