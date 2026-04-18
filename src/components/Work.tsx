import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        if (box.length === 0) return;
        const rectLeft = document.querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0]
          .parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX =
          rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    });

    return () => {
      mm.revert();
    };
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
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Web Development, UI/UX</p>
              </div>
              <WorkImage image={`https://image.thum.io/get/width/1200/crop/800/${project.url}`} alt={project.name} link={project.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
