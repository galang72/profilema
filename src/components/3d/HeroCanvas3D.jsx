import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D = ({ scrollProgress = 0 }) => {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const sceneRefs = useRef(null);

  // Update Three.js camera/mesh depth when scrollProgress changes
  useEffect(() => {
    if (!sceneRefs.current) return;
    const { camera, starGroup, particles } = sceneRefs.current;
    
    camera.position.z = 16 + scrollProgress * 10;
    camera.position.y = 0.5 - scrollProgress * 2;

    if (starGroup) {
      starGroup.rotation.x = scrollProgress * 0.8;
      starGroup.scale.setScalar(Math.max(1 - scrollProgress * 0.25, 0.6));
    }

    if (particles) {
      particles.position.z = -scrollProgress * 15;
    }
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    const scene = new THREE.Scene();
    // Subtle fog to blend with transparent background
    scene.fog = new THREE.FogExp2(0x011611, 0.02);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 16;
    camera.position.y = 0.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Create Islamic 8-pointed star 3D Geometry (Rub el Hizb)
    const starGroup = new THREE.Group();
    
    const emeraldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x059669,
      emissive: 0x022c22,
      roughness: 0.15,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.88,
    });

    const goldWireframeMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });

    const boxGeo1 = new THREE.BoxGeometry(4.2, 4.2, 0.8);
    const boxMesh1 = new THREE.Mesh(boxGeo1, emeraldMaterial);
    const wire1 = new THREE.Mesh(boxGeo1, goldWireframeMat);
    wire1.scale.set(1.002, 1.002, 1.002);
    starGroup.add(boxMesh1);
    starGroup.add(wire1);

    const boxGeo2 = new THREE.BoxGeometry(4.2, 4.2, 0.8);
    const boxMesh2 = new THREE.Mesh(boxGeo2, emeraldMaterial);
    boxMesh2.rotation.z = Math.PI / 4;
    const wire2 = new THREE.Mesh(boxGeo2, goldWireframeMat);
    wire2.rotation.z = Math.PI / 4;
    wire2.scale.set(1.002, 1.002, 1.002);
    starGroup.add(boxMesh2);
    starGroup.add(wire2);

    const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xd4af37,
      emissiveIntensity: 0.7,
      metalness: 0.95,
      roughness: 0.1,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    starGroup.add(coreSphere);

    const torusGeo = new THREE.TorusGeometry(3.6, 0.06, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0xb45309,
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(torusGeo, torusMat);
    ring1.rotation.x = Math.PI / 3;
    starGroup.add(ring1);

    const ring2 = new THREE.Mesh(torusGeo, torusMat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    starGroup.add(ring2);

    mainGroup.add(starGroup);

    // 2. Floating Ambient Particles
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xf59e0b);
    const emeraldColor = new THREE.Color(0x34d399);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 35;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      const mixedColor = Math.random() > 0.4 ? emeraldColor : goldColor;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    sceneRefs.current = { camera, starGroup, particles, ring1, ring2, coreSphere };

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldDirLight = new THREE.DirectionalLight(0xfef08a, 2.0);
    goldDirLight.position.set(5, 8, 8);
    scene.add(goldDirLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 3.5, 25);
    emeraldPointLight.position.set(-6, -4, 4);
    scene.add(emeraldPointLight);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;

      starGroup.rotation.y = elapsedTime * 0.25 + targetX;
      starGroup.rotation.z = Math.cos(elapsedTime * 0.15) * 0.08 + targetY * 0.2;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.y = -elapsedTime * 0.35;

      particles.rotation.y = elapsedTime * 0.04;

      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      coreSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {hasWebGL ? (
        <div ref={containerRef} className="w-full h-full" />
      ) : (
        <div className="relative w-72 h-72 animate-spin-slow">
          <div className="absolute inset-0 border-2 border-gold-400/40 rounded-3xl rotate-45 backdrop-blur-sm bg-emerald-900/20 shadow-glow-emerald" />
          <div className="absolute inset-0 border-2 border-emerald-400/40 rounded-3xl rotate-0 backdrop-blur-sm bg-emerald-900/20 shadow-glow-gold" />
          <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 animate-pulse-glow opacity-80" />
        </div>
      )}
      {/* Light subtle transparent vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#011611]/20 to-[#011611]/40 pointer-events-none" />
    </div>
  );
};
