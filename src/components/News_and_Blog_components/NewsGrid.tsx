import { news } from "../AboutComponents/aboutData";
import Readmore from "../Readmore";

const NewsGrid = () => {
  return (
    <div>
      <section className="flex flex-col gap-y-10">
        {news.map((news, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between gap-y-6 lg:gap-x-6 rounded-lg bg-(--bs-custom-projectgrid-bg) card ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Container */}
            <div
              className={`overflow-hidden w-full lg:w-1/2 ${
                index % 2 === 1
                  ? "rounded-t-lg lg:rounded-t-none lg:rounded-tr-lg lg:rounded-e-lg lg:rounded-s-none"
                  : "rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-s-lg lg:rounded-e-none"
              }max-h-64 md:max-h-80 lg:max-h-96`}
            >
              <img
                className="card-img transition-transform duration-300 ease-in-out w-full h-auto object-cover"
                src={news.image}
                alt={`Grid ${index}`}
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-y-6 p-4 w-full lg:w-1/2">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-2xl font-semibold font-custom-montserrat tracking-wide">
                  {news.title}
                </h1>
                <p className="text-base font-custom-mulish font-medium leading-7 tracking-wider text-(--bs-custom-serviceclr)">
                  {news.description}
                </p>
              </div>
              <div>
                <Readmore />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewsGrid;
