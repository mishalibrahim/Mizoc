import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about-us" className="wrapper sm:mt-[100px]">
      <h2 className="text-4xl font-medium text-primary  sm:text-center  mb-[50px]">
        About Us
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="hidden md:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 aspect-auto max-w-screen-lg">
          <div className="bg-blue-300 items-center justify-center text-2xl row-span-2 col-span-1 rounded-xl ">
            <Image
              src="/assets/images/aboutUs3.jpg"
              alt="background"
              className="rounded-[inherit] w-full h-full object-cover"
              width={640}
              height={550}
            />
          </div>
          <div className="bg-blue-300 items-center justify-center text-2xl row-span-1 col-span-1 rounded-xl hidden lg:flex">
            <Image
              src="/assets/images/aboutUs1.jpg"
              alt="background"
              className="rounded-[inherit] w-full h-full object-cover"
              width={640}
              height={550}
            />
          </div>
          <div className="bg-blue-500  items-center justify-center text-2xl row-span-1 col-span-1 rounded-xl hidden lg:flex">
            <Image
              src="/assets/images/aboutUs2.jpg"
              alt="background"
              className="rounded-[inherit] w-full h-full object-cover"
              width={640}
              height={550}
            />
          </div>
        </div>
        <div>
          <h2 className="text-black font-semibold text-xl md:text-[35px] mb-10 leading-relaxed">
            Pioneering Energy Solutions for a Sustainable Future
          </h2>
          <p className="text-black text-[18px]">
            Mizoc LLC is a leading provider of energy solutions, specializing in
            trading a wide range of equipment and materials for the oil and gas
            industry and MEP sectors. Our mission is to be the preferred partner
            for clients seeking reliable and innovative solutions, exceeding
            expectations through top-quality products, personalized service, and
            unparalleled expertise.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
