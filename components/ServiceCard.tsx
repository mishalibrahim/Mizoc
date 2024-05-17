import Image from "next/image";

type ServiceCardProps = {
  service: {
    title: string;
    image: string;
    description: string;
  };
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="relative group w-[100%] h-[550px] sm:w-[24rem] sm:h-[550px]  my-10 rounded-xl hover:scale-105  transition-all duration-500 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full rounded-[inherit]">
        <Image
          src={service.image}
          alt="background"
          className="rounded-[inherit] w-full h-full object-cover md:group-hover:scale-125 transition-all duration-500"
          width={640}
          height={550}
        />
      </div>
      <div className="w-full h-full bg-[#000000a1] md:bg-[#0000006c] absolute top-0 left-0 z-10 md:group-hover:bg-[#000000a1] rounded-[inherit] transition-all duration-500">
        <div className="absolute md:translate-y-[127px] bottom-0 mb-5 mx-4 group-hover:translate-y-0 transition-all duration-500">
          <h1 className=" text-white font-extrabold text-3xl mb-3">
            {service.title}
          </h1>
          <div className="h-[5px] w-[40%] md:w-0 mb-3 md:opacity-0 bg-yellow-500 md:group-hover:w-[120px] md:group-hover:opacity-100 transition-all duration-700"></div>
          <p className="text-white md:opacity-0 group-hover:opacity-100">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
