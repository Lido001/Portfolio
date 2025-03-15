import { services } from "../AboutComponents/aboutData";
import Readmore from "../Readmore";

const ServiceGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="group card flex flex-col bg-(--bs-custom-service-li-bg) rounded-lg transition duration-300 pb-5 justify-between h-[29rem] shadow-[0_12px_16px_-1px_rgba(255,255,255,0.1),0_12px_16px_-2px_rgba(255,255,255,0.1)] hover:translate-y-[-8px] hover:bg-red-500"
        >
          <div className="rounded-t-lg overflow-hidden h-3/4">
            <img
              className="object-contain w-lg card-img transition-transform duration-300 ease-in-out"
              src={service.image}
              alt={service.title}
            />
          </div>
          <div className="flex flex-col p-5 gap-y-4">
            <div>
              <h3 className="text-xl font-semibold font-custom-montserrat">
                {service.title}
              </h3>
            </div>
            <div>
              <p className="text-base font-custom-mulish text-(--bs-custom-serviceclr group-hover:text-white">
                {service.description}
              </p>
            </div>
            <Readmore link={service.link} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
