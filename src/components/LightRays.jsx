import { useEffect, useRef } from "react";

import { Renderer } from "ogl";
import { Program } from "ogl";
import { Mesh } from "ogl";
import { Triangle } from "ogl";

import vertexShader from "../shaders/vertexShader";
import fragmentShader from "../shaders/fragmentShader";

function hexToRgb(hex) {

  const result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result)
    return [1, 1, 1];

  return [

    parseInt(result[1], 16) / 255,

    parseInt(result[2], 16) / 255,

    parseInt(result[3], 16) / 255,

  ];

}

export default function LightRays({

  raysColor = "#722df7",

  raysSpeed = 1.5,

  lightSpread = 0.8,

  rayLength = 1.2,

  fadeDistance = 1,

  saturation = 1,

  followMouse = true,

  mouseInfluence = 0.1,

  noiseAmount = 0.1,

  distortion = 0.05,

}) {

      const containerRef = useRef(null);

  const rendererRef = useRef(null);

  const meshRef = useRef(null);

  const uniformsRef = useRef(null);

  const animationRef = useRef(null);

  const mouse = useRef({

    x: 0.5,

    y: 0.5,

  });

    useEffect(() => {

    if (!followMouse)
      return;

    const handleMove = (e) => {

      mouse.current = {

        x: e.clientX / window.innerWidth,

        y: e.clientY / window.innerHeight,

      };

    };

    window.addEventListener("mousemove", handleMove);

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMove
      );

    };

  }, [followMouse]);

    useEffect(() => {

    if (!containerRef.current) return;

    const renderer = new Renderer({

      dpr: Math.min(window.devicePixelRatio, 2),

      alpha: true,

      antialias: true,

      powerPreference: "high-performance",

    });

    rendererRef.current = renderer;

    const gl = renderer.gl;

    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    containerRef.current.appendChild(gl.canvas);

    const uniforms = {

      iTime: { value: 0 },

      iResolution: { value: [1, 1] },

      rayPos: { value: [0, 0] },

      rayDir: { value: [0, 1] },

      raysColor: {

        value: hexToRgb(raysColor),

      },

      raysSpeed: {

        value: raysSpeed,

      },

      lightSpread: {

        value: lightSpread,

      },

      rayLength: {

        value: rayLength,

      },

      pulsating: {

        value: 0,

      },

      fadeDistance: {

        value: fadeDistance,

      },

      saturation: {

        value: saturation,

      },

      mousePos: {

        value: [0.5, 0.5],

      },

      mouseInfluence: {

        value: mouseInfluence,

      },

      noiseAmount: {

        value: noiseAmount,

      },

      distortion: {

        value: distortion,

      },

    };

    uniformsRef.current = uniforms;

        const geometry = new Triangle(gl);

    const program = new Program(gl, {

      vertex: vertexShader,

      fragment: fragmentShader,

      uniforms,

    });

    const mesh = new Mesh(gl, {

      geometry,

      program,

    });

    meshRef.current = mesh;

        const resize = () => {

      const width =
        containerRef.current.clientWidth;

      const height =
        containerRef.current.clientHeight;

      renderer.setSize(width, height);

      uniforms.iResolution.value = [

        width * renderer.dpr,

        height * renderer.dpr,

      ];

      uniforms.rayPos.value = [

        (width * renderer.dpr) / 2,

        -150,

      ];

      uniforms.rayDir.value = [

        0,

        1,

      ];

    };

    resize();

    window.addEventListener(

      "resize",

      resize

    );

        const animate = (time) => {

      uniforms.iTime.value = time * 0.001;

      if (followMouse) {

        uniforms.mousePos.value = [

          mouse.current.x,

          mouse.current.y,

        ];

      }

      renderer.render({

        scene: mesh,

      });

      animationRef.current =

        requestAnimationFrame(animate);

    };

    animationRef.current =

      requestAnimationFrame(animate);

          return () => {

      cancelAnimationFrame(

        animationRef.current

      );

      window.removeEventListener(

        "resize",

        resize

      );

      if (

        renderer.gl.canvas.parentNode

      ) {

        renderer.gl.canvas.parentNode.removeChild(

          renderer.gl.canvas

        );

      }

      rendererRef.current = null;

      meshRef.current = null;

      uniformsRef.current = null;

    };

  }, [

    raysColor,

    raysSpeed,

    lightSpread,

    rayLength,

    fadeDistance,

    saturation,

    followMouse,

    mouseInfluence,

    noiseAmount,

    distortion,

  ]);

    return (

    <div

      ref={containerRef}

      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"

    />

  );

}