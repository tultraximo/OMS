import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../../public/img/mold.jpeg";
// import benefitTwoImg from "../../public/img/smoke.jpg";

import white_ape from "../../public/img/whiteape.png";


const benefitOne = {
  title: "World Class Service",
  desc: "We value excellence and professionalism above all. We want to save you time and fix your mold or odor issues as fast as humanly possible.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Same-Day Service",
      desc: "If we can do it same-day, we will.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Money-Back guarantee.",
      desc: "We guarantee your satisfaction or you don't pay.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Best product on the market.",
      desc: "Our 100% Organic product works. We wouldn't be in this business if it wasn't the best product.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Residential and Commercial Mold and Odor removal",
  desc: "We serve both residential and commercial locations.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Residential",
      desc: "Our product is 100% organic and safe for residential use.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Commercial",
      desc: "No job is too small.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Property Managers",
      desc: "One of our most popular uses is to neutralize and remove odors from previous tenants.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
