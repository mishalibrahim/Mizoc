import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <section id="our-services" className="sm:mt-[100px] wrapper">
      <h2 className="text-4xl font-medium text-primary ms-5 sm:text-center sm:ms-0">
        Our Services
      </h2>
      <div className="flex-center">
        <div className="flex justify-around w-full gap-16 mt-12 flex-wrap">
          {services.map((service) => {
            return <ServiceCard service={service} key={service.title} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
