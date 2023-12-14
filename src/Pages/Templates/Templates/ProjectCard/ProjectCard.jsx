import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">
        Project Name: <Link> my-project</Link>
      </h3>
      <h4 className="font-semibold">Used Technology:</h4>
      <p className="text-xs font-semibold">Front End: HTML, CSS, JS, Tailwind, </p>
      <p className="text-xs font-semibold">Back End: HTML, CSS, JS, Tailwind, </p>
      <p className="text-xs font-semibold">Database: MongoDB </p>
      <p className="text-xs font-semibold">Github Link: <Link className="text-purple-600 font-semibold underline">Client Side</Link> | <Link className="text-purple-600 font-semibold underline">Server Side</Link></p>
    </div>
  );
};

export default ProjectCard;
