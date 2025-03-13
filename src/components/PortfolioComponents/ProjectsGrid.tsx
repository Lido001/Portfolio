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
          <div className="card flex flex-col py-5">
            <div className="overflow-hidden rounded-t-lg h-3/4">
              <img
                className="card-img w-full transition duration-300"
                src={project.image}
                alt={project.title}
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
              <Readmore />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
