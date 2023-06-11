import React, { useEffect } from "react";
import LandingNav from "../../components/LandingNav";
import { features } from "./constants";
import Feature from "../../components/Feature";
import Link from "next/link";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter()
  return (
    <div className="h-fit primary-bg min-h-screen flex flex-col pb-20 w-full min-w-[100vw]">
      <LandingNav />
      <div className="flex md:flex-row flex-col gap-10 md:items-center items-start px-10 md:px-0 xl:gap-64 mt-10 md:mt-40 justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="flex flex-col justify-center items-start">
            <span className="text-accent text-3xl">Trade</span>
            <span className="text-secondary md:text-9xl text-7xl font-semibold">
              Hive
            </span>
          </h1>
          <p>
            <span className="text-accent text-md">Together, we can </span>
            <span className="text-secondary font-semibold text-lg">
              Beat the Market
            </span>
          </p>
          <button onClick={(e)=>{
            e.preventDefault()
            router.push('/signin')
          }}
            className="button-bg w-fit px-10 py-2 rounded-full hover:drop-shadow-xl">
            Start Now
          </button>
        </div>
        <div className="">
          <div className="front-cards md:h-96 md:w-96 h-64 w-64 rounded-xl flex flex-col items-start px-8 justify-center gap-3 relative">
            <div className="flex gap-3 justify-start items-center">
              <img
                src="logo.svg"
                alt="logo"
                className="md:h-8 md:w-8 h-5 w-5"
              />
              <h1 className="flex flex-col">
                <span className="text-accent text-xs">Trade</span>
                <span className="text-secondary text-xs font-bold">Hive</span>
              </h1>
            </div>
            <div className="bg-[#151E20] w-fit px-7 py-5 rounded-xl">
              <img src="chart.svg" alt="chart" />
            </div>
            <div className="flex">
              <img src="bull.png" alt="bull" className="md:h-20 h-10" />
              <div className="flex flex-col justify-center">
                <span className="text-accent md:text-md text-xs">
                  Beat the{" "}
                </span>
                <span className="text-[#F7BE17] font-bold md:text-xl text-sm">
                  MARKET{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="front-cards h-64 w-48 rounded-xl flex flex-col items-center justify-center gap-3 absolute lg:bottom-4 md:top-80 xl:right-32 md:right-10">
              <div className="flex gap-3 justify-start items-center">
                <img src="logo.svg" alt="logo" className="h-4 w-4" />
                <h1 className="flex flex-col">
                  <span className="text-accent text-xs">Trade</span>
                  <span className="text-secondary text-xs font-bold">Hive</span>
                </h1>
              </div>
              <div className="bg-[#151E20] w-fit px-2 py-5 rounded-xl">
                <img src="chart.svg" alt="chart" className="w-32" />
              </div>
              <div className="flex">
                <img src="bull.png" alt="bull" className="h-10" />
                <div className="flex flex-col justify-center">
                  <span className="text-accent text-md">Beat the </span>
                  <span className="text-[#F7BE17] font-bold text-lg">
                    MARKET{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="mt-20 px-10 flex justify-evenly items-center h-screen md:flex-row flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl font-semibold text-secondary">About</h2>
          <p className="text-accent max-w-md text-xl">
            Trade Hive is a cutting-edge stocks website revolutionizing the way
            you trade. With global chat, AI-powered trend predictions, and
            daily news updates, you can stay ahead of the curve and trade
            smarter. Join our hive and unlock your trading potential today.
          </p>
        </div>
        <img
          src="./stock2.jpg"
          alt="about"
          className="h-96 w-auto drop-shadow-md rounded-xl "
        />
      </div>
        
      <div id="features" className=" px-10 flex justify-evenly items-center ">
        <div className="flex flex-col gap-10 mt-20">
          <h2 className="text-5xl font-semibold text-secondary">Features</h2>
          {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            img={feature.image}
            desc={feature.description}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
          ))}
        </div>
      </div>

      <div id="Listing" className="mt-32 px-10 flex justify-evenly items-center md:flex-row flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl font-semibold text-secondary">Listing</h2>
          <p className="text-accent max-w-md">
            To List your company with TradeHive you can contact us at 
            <span className="font-bold text-secondary"> : email@gmail.com</span>
          </p>
        </div>
        <img
          src="./listing.jpg"
          alt="about"
          className="h-72 w-96 drop-shadow-md rounded-xl"
        />
      </div>


    </div>
  );
};

export default Landing;