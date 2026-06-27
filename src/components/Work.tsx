import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  { name: "Birla Eco Sodium", category: "Corporate Website", url: "https://www.birlaecosodium.com/" },
  { name: "A Force For Good", category: "News & Media", url: "https://aforceforgoodupdates.com/" },
  { name: "EMLT", category: "Corporate Website", url: "https://www.emlt.in/" },
  { name: "Automag India", category: "Corporate Website", url: "https://automagindia.com/" },
  { name: "Aahar Foods", category: "E-Commerce", url: "https://www.aaharfoods.com/" },
  { name: "Shree Rubber Works", category: "Corporate Website", url: "https://www.shreerubberworks.com/" },
  { name: "Greenviro", category: "Services", url: "https://greenviro.net/waste-water-treatment/" },
  { name: "Ayama Fit", category: "Health & Fitness", url: "https://ayamafit.com/" },
  { name: "Ayama Health", category: "Health & Fitness", url: "https://www.ayamahealth.com/" },
  { name: "The Impulse Digital", category: "Digital Agency", url: "https://www.theimpulsedigital.com/" },
];

const Work = () => {
  useGSAP(() => {
    gsap.from(".work-box", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <WorkImage
                image={`https://image.thum.io/get/width/1200/crop/800/${project.url}`}
                alt={project.name}
                link={project.url}
              />
              <div className="work-info">
                <div className="work-header">
                  <span className="work-number">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className="work-category">{project.category}</span>
                </div>
                <h3 className="work-name">{project.name}</h3>
                <div className="work-details">
                  <span className="work-tag">Web Development</span>
                  <span className="work-tag">UI/UX</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
