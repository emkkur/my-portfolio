'use client';
import { FC, useEffect, useState } from "react";

import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";
import particleConfig from "@/public/particles/particlesjs-config.json";
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "@tsparticles/path-polygon";

const ParticleBg: FC = ({}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadPolygonPath(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  if (!init) {
    return null;
  }
  return (
    <div >
      <Particles options={particleConfig as ISourceOptions} />
    </div>
  );
};

export default ParticleBg;