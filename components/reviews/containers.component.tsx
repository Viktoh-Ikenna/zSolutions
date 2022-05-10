import Svgs from "../../assets/svgs";
import { ReviewersImg, StarIcon } from "./stars.component";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Images from "../../assets/images";

const { reviewerImage } = Images;
const { noneShadedStar, shadedstars } = Svgs;

interface container {
  starCount: number;
  title: string;
  content: string;
  userImg: any;
  username: string;
  extraClass: string;
  styles: any;
}
function Containers({
  starCount,
  title,
  content,
  username,
  userImg,
  extraClass,
  styles,
}: container) {
  const theme = useContext(ThemeContext);

  return (
    <div
      id="reviews"
      className={`w-full h-container flex-center bg-white shadow-lg rounded-lg transition-all duration-700 ${extraClass}`}
      style={{
        minWidth: "278px",
        maxWidth: "278px",
        margin: "0 10px",
        ...styles,
      }}>
      <div className="w-full h-full px-6 pt-4 pb-2">
        <h4
          className="text-sm font-black text-center py-2"
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            color: theme.colors.link,
          }}>
          {title}
        </h4>
        <p
          className="text-center text-sm px-3"
          style={{ lineHeight: "25.89px" }}>
          {content}
        </p>
        <div className="rating">
          <div className="w-auto h-auto flex-center py-3 border-b-2 border-gray-200">
            <p
              className="mx-2 font-black flex-center"
              style={{ color: theme.colors.primary }}>{`${Math.floor(
              starCount
            )}.0`}</p>
            {[...Array(Math.floor(starCount))].map((el) => (
              <StarIcon src={shadedstars} key={el} />
            ))}
            {[...Array(5 - Math.ceil(starCount))].map((el) => (
              <StarIcon src={noneShadedStar} key={el} />
            ))}
          </div>
        </div>
        <div className="reviewer mt-5">
          <div className="w-auto h-auto flex-center">
            <div className="rounded-full px-2 mx-2">
              <ReviewersImg className="rounded-full" src={userImg} />
            </div>
            <p className="font-bold text-black">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containers;
