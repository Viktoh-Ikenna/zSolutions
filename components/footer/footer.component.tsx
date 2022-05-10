import Link from "next/link";
import styles from "./footer.module.css";
import Svgs from "../../assets/svgs";
import { LandingSvgs } from "../my-image/image-container.component";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import useTheme from "../../hooks/useTheme";

const { footetTitleCap } = Svgs;
const Footer = () => {
  const theme = useTheme()

  return (
    <div
      className="w-full h-auto flex-center flex-col rounded-lg py-6"
      style={{ backgroundColor: theme.colors.secondary }}
    >

      <div className="phone:w-11/12 tablet:w-10/12 bgtablet:w-9/12 flex phone:justify-start tablet:justify-between phone:items-start tablet:items-center phone:flex-col tablet:flex-row p-6">

        <div className="flex-start phone:my-6 tablet:my-0 tablet:h-footerBox">
          <h4
            className="font-black font-3xl flex items-center"
            style={{ color: theme.colors.primary }}
          >
            <div className="w-6 h-6 mx-2">
              <LandingSvgs src={footetTitleCap} />
            </div>
            <span style={{ color: "#2C56A4" }}>i</span>LearnBlock
          </h4>
        </div>
        <div
          className={`text-left h-footerBox flex justify-start items-center flex-col ${styles.f_con}`}
        >
          <p style={{ color: theme.colors.primary }} className="font-extrabold text-3xl">
            Services
          </p>
          <Link href="#">
            <p className="text-white">Email Marketing</p>
          </Link>
          <Link href="#">
            <p>Campaigns</p>
          </Link>
          <Link href="#">
            <p>Branding</p>
          </Link>
          <Link href="#">
            <p>Offline</p>
          </Link>
        </div>
        <div
          className={`text-left h-footerBox flex justify-start items-center flex-col ${styles.f_con}`}
        >
          <p style={{ color: theme.colors.primary }} className="font-extrabold text-3xl">
            About
          </p>
          <Link href="#">
            <p>Our Story</p>
          </Link>
          <Link href="#">
            <p>Benefits</p>
          </Link>
          <Link href="#">
            <p>Team</p>
          </Link>
          <Link href="#">
            <p>Careers</p>
          </Link>
        </div>
        <div
          className={`text-left h-footerBox flex justify-start items-center flex-col ${styles.f_con}`}
        >
          <p style={{ color: theme.colors.primary }} className="font-extrabold text-3xl">
            Help
          </p>
          <Link href="#">
            <p>Help</p>
          </Link>
          <Link href="#">
            <p>Faq</p>
          </Link>
          <Link href="#">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="phone:w-11/12 tablet:w-10/12 bgtablet:w-9/12 flex-between p-2 px-6">
        <div className="flex-center max-w-56 h-20 border-b border-bgray-400">
          <input
            type="text"
            placeholder="Email address"
            className="bg-transparent border border-white w-10/12 text-xs placeholder-bgray-600 py-4 border-none outline-none text-bgray-400"
          />
          <div
            className="px-4 py-4 text-gray-100 text-bold rounded-tr-lg rounded-tl-lg cursor-pointer"
            style={{ backgroundColor: theme.colors.primary }}
          >
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
      <div className="phone:w-11/12 tablet:w-10/12 bgtablet:w-9/12 flex tablet:justify-between phone:justify-start phone:items-start tablet:items-center phone:flex-col-reverse tablet:flex-row  p-2 text-white my-6 px-6">
        <div className="flex-between w-72 text-xs text-bgray-300 py-2 ">
          <Link href="#"><p>
            Terms & Conditions </p></Link>
          <Link href="#"><p>
            Privacy Policy </p></Link>
        </div>
        <div className="text-xl flex-between w-32 py-2">
          <div className="cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="cursor-pointer">
            <FaTwitter />
          </div>
          <div className="cursor-pointer">
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
