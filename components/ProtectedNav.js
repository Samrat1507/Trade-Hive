import React from "react";
import { UserButton } from "@clerk/nextjs";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useSnapshot } from "valtio";
import state from "../state";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";


const ProtectedNav = () => {
  const snap = useSnapshot(state);
  return (
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
    >

      <motion.div
        variants={slideIn('down', 'spring', 0, 1)}
        className="flex flex-col">
        <ul
          className={`flex-row-reverse flex justify-between items-center w-full h-fit py-5 ${state.sidebar ? "pl-48" : "pl-20"
            }`}
        >
          <div className="flex flex-row-reverse items-center justify-evenly">
            <li className="px-5 text-xl text-tertiary cursor-pointer">
              <UserButton />
            </li>
            <li className="px-5 text-xl text-tertiary cursor-pointer">
              <RiNotification3Line />
            </li>
          </div>
          <div>
            <li
              className={`text-tertiary text-xl cursor-pointer ${state.sidebar ? 'pl-48' : 'pl-0'}`}
              onClick={() => {
                state.sidebar = !state.sidebar;
              }}
            >
              <AiOutlineMenu />
            </li>
          </div>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ProtectedNav;
