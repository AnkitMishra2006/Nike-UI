import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images/index.js";
import { Button } from "../components/Button.jsx";
import { shoes, statistics } from "../constants/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mx-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:pading-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10  text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[85] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg mt-6 mb-14 sm:max-w-sm text-slate-gray leading-8">
          Discover stylish Nike Arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.label}
              className="flex flex-col items-start gap-2"
            >
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
          <div key={shoe} className="">
            <img
              src={shoe}
              alt="shoe"
              className="hidden xl:block absolute top-0 right-0 transform translate-x-1/2 translate-y-1/2"
              style={{ width: "30%", zIndex: -1 }}
            />
            <ShoeCard imgURL={shoe} changeBigShoeImage={()=>{}} bigShoeImage=""/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
