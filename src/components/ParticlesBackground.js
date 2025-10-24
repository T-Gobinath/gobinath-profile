import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    
    const options = {
        background: {
          color: {
            value: "#0a192f",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
              },
            },
            push: {
                quantity: 4,
            }
          },
        },
        particles: {
          color: {
            value: "#ccd6f6",
          },
          links: {
            color: "#ccd6f6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.8, // Slightly more opaque base
            animation: {
              enable: true,
              speed: 2.5, // Increased speed for more distinct blink
              sync: false,
              minimumValue: 0.1
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.8, max: 2.5 }, // Slightly adjusted size range
            animation: {
              enable: true,
              speed: 3, // Increased speed for more noticeable pulse
              sync: false,
              minimumValue: 0.5
            }
          },
        },
        detectRetina: true,
      };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesBackground;