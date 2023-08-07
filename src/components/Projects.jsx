import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "TalkGpt",
    url: "https://talk-gpt-topaz.vercel.app/",
    image: "projects/talk-gpt.png",
    description: "Created a chatgpt clone with voice recognition",
    
  },
    {
    title: "Google clone",
    url: "https://google-clone-next-js-react.vercel.app/",
    image: "projects/google-clone.png",
    description: "Created a google clone search engine",
  },
    {
    title: "MY Portfolio",
    url: "https://david-mwas.vercel.app/",
    image: "projects/portfolio.png",
    description: "Created a 3D portfolio",
  },
  {
    title: "Word Scrammble",
    url: "https://react-word-scramble-game.vercel.app/",
    image: "projects/word-scramble.png",
    description: "Word scramble react game",
  },
  {
    title: "Voice to Note",
    url: "https://voice-to-text-note.vercel.app/",
    image: "projects/voicetonotes.png",
    description: "Todo text note with voice recognition",
  },
  {
    title: "Juks UI",
    url: "https://jukscomp.vercel.app/",
    image: "projects/juks.png",
    description: "Social media app UI",
  },
 
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 1 : 0.5);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });


  return (
    <group {...props} >
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={1} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
        
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={3}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
