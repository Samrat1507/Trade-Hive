import React from "react";
import Link from "next/link";
import { slideIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const LandingNav = () => {
  return (
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className="fixed top-0 md:block hidden w-full z-10 ">
      <motion.div
       variants={slideIn('down', 'spring', 0, 1)}
      className="absolute top-0 w-full bg-black -z-10 opacity-40 h-full"></motion.div>
      <motion.nav
       variants={slideIn('down', 'spring', 0, 1)}
      >
        <ul className="px-20 py-5 flex justify-between">
          <li className="flex gap-3 items-center">
            <img src="logo.svg" alt="logo" className="h-8 w-8" />
            <h1 className="flex flex-col">
              <span className="text-accent text-sm">Trade</span>
              <span className="text-secondary text-xl font-bold">Hive</span>
            </h1>
          </li>
          <ul className="flex justify-evenly">
            <li className="px-5 py-2">
              <Link href="#about">
                <p className="text-accent cursor-pointer hover:text-white hover:drop-shadow-md">
                  About
                </p>
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link href="#features">
                <p className="text-accent cursor-pointer hover:text-white hover:drop-shadow-md">
                  Features
                </p>
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link href="#Listing">
                <p className="text-accent cursor-pointer hover:text-white hover:drop-shadow-md">
                  Listings
                </p>
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link href="signin">
                <p className="text-accent cursor-pointer hover:text-white hover:drop-shadow-md">
                  Login
                </p>
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link href="protected">
                <p className="text-accent cursor-pointer hover:text-white hover:drop-shadow-md">
                  Dashboard
                </p>
              </Link>
            </li>
          </ul>
        </ul>
      </motion.nav>
    </motion.div>
  );
};
export const getServerSideProps = async () => {
  console.log("hiii")


  return { props: {} }
}

export default LandingNav;
