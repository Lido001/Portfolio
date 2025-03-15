import { skills } from "./aboutData";

interface ProjectsGridProps {
  selectedCategory: string;
}

const SkillsSet: React.FC<ProjectsGridProps> = ({ selectedCategory }) => {
  const filteredskills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skills) => skills.category === selectedCategory);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-7 gap-x-9 w-full py-12">
      {filteredskills.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center py-5 bg-[--bs-custom-projectgrid-bg] rounded-lg text-center transition duration-300 shadow-[0_12px_16px_-1px_rgba(255,255,255,0.1),0_12px_16px_-2px_rgba(255,255,255,0.1)] hover:translate-y-[-8px] overflow-hidden border-2 border-transparent hover:border-rose-500"
          >
            {/* Background overlay for the hover effect */}
            <div className="absolute inset-0 bg-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-25 rounded-lg"></div>

            {/* Image with relative z-index to stay on top */}
            <img
              src={item.image}
              alt={item.title}
              className="w-19 h-19 relative z-10"
            />

            {/* Title with relative z-index */}
            <h1 className="mt-2 font-semibold text-base relative z-10 text-white">
              {item.title}
            </h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SkillsSet;
