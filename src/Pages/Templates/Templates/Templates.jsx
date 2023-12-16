import phoneImg from "../../../../public/images/phone.png";
import emailImg from "/images/email.png";
import webImg from "../../../../public/images/web.png";
import SectionTitle from "../../../components/SectionTitle";
// import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";
import EducationCard from "../Educations/EducationCard";
import ExperienceCard from "../Experiences/ExperienceCard";
// import { FcCallback, FcVoicemail } from "react-icons/fc";

const Templates = () => {
  return (
    <div>
      <h2>All Templates Here</h2>
      {/* main div */}
      <div className="max-w-5xl mx-auto bg-gray-100 mt-5">
        {/* header section */}
        <div className="template-header flex justify-between px-5 py-4 border-b-4">
          <div>
            <h2 className="text-2xl font-bold">Shamim Ahammad</h2>
            <p className="font-bold">MERN Stack Developer</p>
          </div>
          <div className="contact-info flex flex-col items-end">
            <div className="flex items-center gap-2 mb-2">
              <p>+9999999999</p>
              <img className="w-5" src={phoneImg} alt="" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <p>mail@gmail.com</p>
              <img className="w-5" src={emailImg} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <p>https://www.web.com</p>
              <img className="w-5" src={webImg} alt="" />
            </div>
          </div>
        </div>
        
        {/* description section */}
        <div className="description px-5 py-4">
          <p className="indent-16 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            cumque repudiandae amet laudantium. Animi cumque provident porro
            inventore dolor, perferendis, velit pariatur autem ab sit asperiores
            aspernatur deleniti reiciendis molestiae cupiditate omnis tempora
            reprehenderit, ipsa quas vero. Asperiores eaque ipsum accusamus esse
            repudiandae! Corporis itaque dolores ea totam quidem natus.
          </p>
        </div>

        {/* skills section */}
        <div className="skills px-5 py-4">
          <SectionTitle>Skills</SectionTitle>
          <ul className="grid grid-cols-2 list-disc px-12">
            <li>skills</li>
            <li>skills</li>
            <li>skills</li>
            <li>skills</li>
            <li>skills</li>
            <li>skills</li>
          </ul>
        </div>

        {/* projects section */}
        <div className="projects px-5 py-4">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-2 justify-between">
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </div>
        </div>

        {/* education section */}
        <div className="projects px-5 py-4">
          <SectionTitle>Educations</SectionTitle>
          <div className="grid grid-cols-2 justify-between">
            <EducationCard></EducationCard>
            <EducationCard></EducationCard>
          </div>
        </div>

        {/* experience section */}
        <div className="projects px-5 py-4">
          <SectionTitle>Experiences</SectionTitle>
          <div className="space-y-3">
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
