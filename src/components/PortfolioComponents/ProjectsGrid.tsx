import { projects } from "../AboutComponents/aboutData";
import Readmore from "../Readmore";

interface ProjectsGridProps {
  selectedCategory: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ selectedCategory }) => {
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="grid md:grid-cols-2 gap-10 py-8 text-white">
      {filteredProjects.map((project, index) => (
        <div key={index}>
          <div className="group card flex flex-col bg-(--bs-custom-projectgrid-bg) rounded-lg transition duration-300 shadow-[0_12px_16px_-1px_rgba(255,255,255,0.1),0_12px_16px_-2px_rgba(255,255,255,0.1)] hover:translate-y-[-8px] hover:bg-red-500">
            <div className="overflow-hidden rounded-t-lg h-3/4">
              <img
                className="card-img w-full transition duration-300"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="flex flex-col gap-y-4 rounded-b-lg p-3 pb-10 pt-6">
              <div>
                <h1 className="text-xl font-semibold font-custom-montserrat tracking-wide py-1">
                  {project.title}
                </h1>
              </div>
              <div>
                <p className="font-custom-mulish text-base font-medium text-(--bs-custom-serviceclr) group-hover:text-white">
                  {project.description}
                </p>
              </div>
              <Readmore link={project.link}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
