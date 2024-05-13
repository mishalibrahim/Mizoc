import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <section id="our-services">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-medium text-primary">Our Services</h2>
        <div className="flex justify-around max-w-[1200px] w-full mt-12 flex-wrap">
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
