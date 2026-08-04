"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 3, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    // --- Main Neural Icosahedron Sphere ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Wireframe Outer Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeSphere = new THREE.Mesh(sphereGeo, wireframeMat);
    mainGroup.add(wireframeSphere);

    // Glowing Vertex Nodes (Spheres at vertices)
    const positionAttribute = sphereGeo.attributes.position;
    const nodeGeo = new THREE.SphereGeometry(0.025, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });
    const nodeGroup = new THREE.Group();

    for (let i = 0; i < positionAttribute.count; i += 3) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = positionAttribute.getZ(i);
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeGroup.add(nodeMesh);
    }
    mainGroup.add(nodeGroup);

    // Inner Cybernetic Core (Solid glowing faceted sphere)
    const innerGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0d0d1a,
      emissive: 0x1a0b2e,
      specular: 0x00f0ff,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerCore);

    // --- Orbital Holographic Rings ---
    const createRing = (radius: number, color: number, rotateX: number, rotateY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.008, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.45,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotateX;
      ring.rotation.y = rotateY;
      return ring;
    };

    const ring1 = createRing(2.1, 0x00f0ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.4, 0x9d4edd, -Math.PI / 4, Math.PI / 3);
    const ring3 = createRing(2.7, 0xffffff, Math.PI / 2, 0);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // --- Particle Field (AI Data Cloud) ---
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x9d4edd);
    const color3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 15;

      const randomColor = Math.random();
      const chosenColor =
        randomColor < 0.4 ? color1 : randomColor < 0.8 ? color2 : color3;

      colorArray[i] = chosenColor.r;
      colorArray[i + 1] = chosenColor.g;
      colorArray[i + 2] = chosenColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // --- Interactive Mouse tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0015;
      mouseY = (event.clientY - windowHalfY) * 0.0015;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --- Responsive Handle ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp camera/sphere rotation towards mouse
      targetX = targetX + (mouseX - targetX) * 0.05;
      targetY = targetY + (mouseY - targetY) * 0.05;

      mainGroup.rotation.y += 0.004;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2 + targetY;
      mainGroup.rotation.z = Math.cos(elapsedTime * 0.5) * 0.1 - targetX;

      // Rotate inner sphere & rings independently
      innerCore.rotation.y -= 0.008;
      innerCore.rotation.x += 0.005;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.004;
      ring3.rotation.y += 0.005;

      // Pulse ring scale gently
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.03;
      ring1.scale.set(pulse, pulse, pulse);
      ring2.scale.set(pulse, pulse, pulse);

      // Rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.03 + targetX * 0.5;
      particleSystem.rotation.x = elapsedTime * 0.02 + targetY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      wireframeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
}
