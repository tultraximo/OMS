import {
  ExclamationCircleIcon,
  NoSymbolIcon,
  BeakerIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  BoltIcon,
  EyeDropperIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../../public/img/4xmold.png";
import benefitTwoImg from "../../public/img/4xfog.png";

import white_ape from "../../public/img/whiteape.png";


const benefitOne = {
  title: "THE PROBLEM",
  desc: "Mold always exists in the air before it becomes visible on any surfaces. It's not enough to just remove the surface. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Surface Mold (Visible)",
      desc: "Visible Mold: Black mold, penicillium, etc",
      icon: <ExclamationCircleIcon />,
    },
    {
      title: "Airborne Mold (Invisible)",
      desc: "Invisible Mold: Spores in the air",
      icon: <BeakerIcon />,
    },
    {
      title: "VISIBLE and INVISIBLE mold need to be eliminated!",
      desc: "Unless both the Air and Surface are treated, the problem will stay.",
      icon: <NoSymbolIcon />,
    },
  ],
};

const benefitTwo = {
  title: "THE SOLUTION",
  desc: "Our unique fogging treatment allows us to eliminate toxic Surface AND Airborne Mold for good!",
  image: benefitTwoImg,
  bullets: [
    {
      title: "POWERFUL",
      desc: "120x stronger than Bleach. Guaranteed to eliminate all surface and airborne mold!",
      icon: <BoltIcon />,
    },
    {
      title: "SAFE",
      desc: "The product we use to fog your home is 100% Safe USDA ORGANIC",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "EFFECTIVE",
      desc: "Our unique fogging treatment eliminates both Air and Surface mold. Leaving your home truly mold free.",
      icon: <SparklesIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
