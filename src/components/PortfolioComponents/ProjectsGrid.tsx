import { projects } from "../AboutComponents/aboutData";
import Readmore from "../Readmore";
import img from '../../assets/images/Screenshot 2025-02-11 213241.png';

const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-8 text-white">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 className="py-12 font-custom-montserrat font-semibold tracking-wide">
            Project 0{index + 1}
          </h1>
          <div className="card flex flex-col">
            <div className="overflow-hidden rounded-t-lg">
              <img className="card-img transition duration-300" 
                src={img}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-4 bg-(--bs-custom-projectgrid-bg) rounded-b-lg p-3 pb-10 pt-6">
              <div>
                <h1 className="text-xl font-semibold font-custom-montserrat tracking-wide py-1">
                  {project.title}
                </h1>
              </div>
              <div>
                <p className="font-custom-mulish text-base font-medium text-(--bs-custom-serviceclr)">
                  {project.description}
                </p>
              </div>
              <Readmore/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
