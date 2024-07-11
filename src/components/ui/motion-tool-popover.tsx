"use client";
import {
  EnvelopeClosedIcon,
  GearIcon,
  HeartIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import useClickOutside from "hooks/useClickOutside";
// import { useMediaQuery } from "hooks/useMediaQuery";

export default function FamilyPopoverMenu() {
  const refMenu = React.useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  //   const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const isScreenSizeSm = false;

  const duration = 0.2;
  const transition = { duration, ease: [0.32, 0.72, 0, 1] };

  const menuVariants = {
    open: {
      opacity: 1,
      width: isScreenSizeSm ? "100%" : "320px",
      height: 220,
      borderRadius: "16px",
      bottom: -44,
      transition,
    },
    closed: {
      bottom: 0,
      opacity: 1,
      width: "48px",
      height: 48,
      borderRadius: "50%",
      transition,
    },
  };

  const contentVariants = {
    open: { opacity: 1, scale: 1, transition },
    closed: { opacity: 0, scale: 1, transition },
  };

  const buttonVariants = {
    open: {
      opacity: 0,
      transition: {
        duration: duration / 2,
      },
    },
    closed: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  const items = [
    {
      title: "Settings",
      text: "Adjust your preferences",
      icon: GearIcon,
    },
    {
      title: "Messages",
      text: "View your messages",
      icon: EnvelopeClosedIcon,
    },
    {
      title: "Favorites",
      text: "Manage your favorites",
      icon: HeartIcon,
    },
  ];

  //   useClickOutside<HTMLDivElement>(refMenu, () => {
  //     setOpenMenu(false);
  //   });

  return (
    <div className="relative mx-6 mb-16 flex h-[300px] w-full items-end justify-start">
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="absolute bottom-0 left-0 flex flex-col items-center overflow-hidden bg-mauve-dark-1 p-1 dark:bg-mauve-light-1"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onClick={(e) => e.stopPropagation()}
            ref={refMenu}
          >
            <motion.ul
              variants={contentVariants}
              className="relative flex w-full flex-col space-y-1"
            >
              {items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="w-full select-none rounded-b-[4px] rounded-t-[4px] bg-mauve-dark-2 transition-transform first:rounded-t-[12px] last:rounded-b-[12px] active:scale-[0.98] dark:bg-mauve-light-2"
                  >
                    <div className="flex items-center py-3">
                      <div className="px-4">
                        <item.icon className="h-5 w-5 text-mauve-dark-12 dark:text-mauve-light-12" />
                      </div>
                      <div>
                        <h3 className="text-base text-mauve-dark-12 dark:text-mauve-light-12">
                          {item.title}
                        </h3>
                        <p className="text-sm text-mauve-dark-11 dark:text-mauve-light-11">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-mauve-dark-1 p-2 text-mauve-dark-12 outline-none dark:bg-mauve-light-1 dark:text-mauve-light-12"
        disabled={openMenu}
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(true);
        }}
        variants={buttonVariants}
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
      >
        <PlusIcon className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
