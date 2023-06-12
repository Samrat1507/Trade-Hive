import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "@/pages/state";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from "next/router";
import { links } from "@/pages/constants";
import Image from "next/image";
import logo from '../public/logo.svg'
import Link from "next/link";


const ProtectedSidebar = ({ active }) => {
  const snap = useSnapshot(state);
  const activeLink = "text-[#1f2223] text-md active-link-bg rounded-md";
  const normal = "text-accent text-md rounded-md hover:text-white";
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => (state.screenSize = window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (state.screenSize <= 800) {
      state.sidebar = false;
    } else {
      state.sidebar = true;
    }
  }, [state.screenSize]);
  return (
    <div
      className={`fixed top-0 sidebar-bg h-full px-10 py-7 z-10 md:max-w-[30vw] ${state.sidebar ? "block" : "hidden"
        }`}
    >
      <div
        className="flex flex-row-reverse gap-10 justify-center cursor-pointer"
      >
        <div
          className={`text-tertiary text-xs ${state.screenSize <= 800 ? "block" : "hidden"
            }`}
          onClick={() => {
            state.sidebar = false;
          }}
        >
          <MdOutlineCancel />
        </div>
        <div className="">
          <div 
          onClick={() => {
            router.push("/");
          }}
          className="flex gap-3 items-center relative">
            <Image src={logo} alt="logo" height={8} width={8} className="h-8 w-8" />
            <h1 className="flex flex-col ">
              <span className="text-accent text-sm ">Trade</span>
              <span className="text-secondary font-semibold text-lg">Hive</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-3">
        {links.map((link) => (
          <div key={link.title} className="">
            <p className="text-white mt-4 m-3 uppercase">{link.title}</p>
            {link.links.map((l) => (
              <Link legacyBehavior
                key={l.name}
                className={`${active === l.name ? activeLink : normal
                  } flex items-center gap-4 px-5 py-1 cursor-pointer`}
                href={l.to}
              >
                <a target={l.name==="Statistics and Predictions" ? '_blank' : ''} className={`${active === l.name ? activeLink : normal
                  } flex items-center gap-4 px-5 py-1 cursor-pointer`}>
                {l.icon}
                <span className="capitalize">{l.name}</span>
                </a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectedSidebar;
