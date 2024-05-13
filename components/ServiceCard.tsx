const ServiceCard = () => {
  return (
    <div>
      <div className="relative group w-screen h-[550px] sm:w-[24rem] sm:h-[550px] sm:mx-8 mx-5 my-10 rounded-xl hover:scale-105  transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full rounded-[inherit]">
          <img
            src="/assets/images/service1.png"
            alt="background"
            className="rounded-[inherit] w-full h-full object-cover md:group-hover:scale-125 transition-all duration-500"
          />
        </div>
        <div className="w-full h-full bg-[#0000008e]  md:bg-[#00000045] absolute top-0 left-0 z-50 md:group-hover:bg-[#0000008e] rounded-[inherit] transition-all duration-500">
          <div className="absolute md:translate-y-[127px] bottom-0 mb-5 mx-4 group-hover:translate-y-0 transition-all duration-500">
            <h1 className=" text-white font-extrabold text-3xl mb-3">
              Oil and Gas Equipment Trading
            </h1>
            <div className="h-[5px] md:w-0 mb-3 md:opacity-0 bg-yellow-500 md:group-hover:w-[120px] md:group-hover:opacity-100 transition-all duration-700"></div>
            <p className="text-white md:opacity-0 group-hover:opacity-100">
              Explore our comprehensive range of equipment and materials for the
              oil and gas sector, including drilling equipment, pipelines,
              valves, pumps, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
