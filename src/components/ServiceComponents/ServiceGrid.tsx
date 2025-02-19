import { services } from "../AboutComponents/aboutData";
import Readmore from "../Readmore";

const ServiceGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="card  flex flex-col gap-y-5 bg-(--bs-custom-service-li-bg) rounded-lg transition duration-300 pb-5">
            <div className="rounded-t-lg overflow-hidden">
            <img className="object-contain card-img transition-transform duration-300 ease-in-out" src="src\assets\images\—Pngtree—modern flat design concept of_5332909.png" alt="" />
            </div>
          <div className="flex flex-col p-5 gap-y-4">
            
            {/* <span className="m-0 w-16 h-16 flex items-center justify-center rounded-full bg-(--bs-custom-service-li-num-bg) font-custom-montserrat font-bold tracking-wider">
              0{index+1}
            </span> */}
          
          <div>
            <h3 className="text-xl font-semibold font-custom-montserrat">
              {service.title}
            </h3>
          </div>
          <div>
            <p className="text-base font-custom-mulish text-(--bs-custom-serviceclr)">
              {service.description}
            </p>
          </div>
          <Readmore/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
