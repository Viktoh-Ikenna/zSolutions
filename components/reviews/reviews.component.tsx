import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Containers from "./containers.component";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import styles from "./review.module.css";
import { useEffect } from "react";

interface reviewsProp {
  reviews: {
    starCount: number;
    title: string;
    content: string;
    userImg: any;
    username: string;
    key: number;
  }[];
}

function Reviews({ reviews }: reviewsProp) {
  const three = 3;

  const theme = useContext(ThemeContext);
  const [shown, setShown] = useState(three);
  const [movement, setmovement] = useState({
    forward: true,
    backward: false,
  });
  const [width, setWidth] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [Movement, setMmovement] = useState({
    forward: 0,
    backward: 0,
    start: 0,
    end: 0,
  });

  //////////////////////////////////////////////////////////////////////////
  ///HANDLING ON SCREEN RESIZE //
  if (typeof window !== "undefined") {
    useEffect(() => {
      setWidth(window.screen.width);
      window.onresize = () => {
        setWidth(window.screen.width);
      };
    }, []);
  }

  ///HANDLING THE FORWARD AND BACKWARD CLICK LISTENER
  const handleNext = () => {
    if (shown <= reviews.length - 1) {
      setShown((prev) => prev + 1);
      handleMovements();
    } else {
    }
  };

  const handlePrev = () => {
    if (shown > three) {
      setShown((prev) => prev - 1);
      handleMovement2();
    } else {
      handleMovement2();
    }
  };
  //////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////FOR MOBILE FUNTIONALITIES///////////////////////////////////

  ////FOR CHECKING BACKWARD AND FORWARD //
  const handleMovements = () => {
    if (shown + 1 > three && shown < reviews.length - 1) {
      setmovement((prev) => {
        return { forward: true, backward: true };
      });
    } else if (shown >= reviews.length - 1) {
      setmovement((prev) => {
        return { ...prev, forward: false };
      });
    }
  };

  const handleMovement2 = () => {
    if (shown - 1 < reviews.length) {
      setmovement((prev) => {
        return { ...prev, forward: true };
      });
    }
    if (shown - 1 < three + 1) {
      setmovement((prev) => {
        return { ...prev, backward: false };
      });
    }
  };
  /////////////////////////////////////////////////////END//////////////////////////////

  ///FOR SLIDING MOBILE ///
  useEffect(() => {
    // console.log(Movement.backward);
    if (Movement.backward > 150) {
      if (mobile > 0) {
        setMobile((prev) => prev - 1);
      } else {
      }
    } else if (Movement.backward < -150) {
      if (mobile < reviews.length - 1) {
        setMobile(mobile + 1);
      }
    }
    setMmovement((prev) => {
      return { ...prev, backward: 0 };
    });
  }, [Movement.end]);
  /////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////
  //// FOR MOBILE SLIDE OF THE REVIEWS//

  const handleTouchStart = (e: any) => {
    let touchstart = e.targetTouches[0].clientX;
    setMmovement((prev) => {
      return { ...prev, start: touchstart };
    });
  };
  const handleTouchMove = (e: any) => {
    let c = e.targetTouches[0].clientX - Movement.start;
    setMmovement((prev) => {
      return { ...prev, backward: c };
    });
  };

  const handleTouchEnd = (e: any) => {
    setMmovement((prev) => {
      return { ...prev, end: prev.end + 1 };
    });
  };
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="min-w-full h-contHeight flex-center bg-bgray-100 py-22">
      <div className="w-auto relative ">
        <h3
          className="text-2xl font-black mb-8 w-full phone:text-center tablet:text-left"
          style={{
            fontFamily: "Montserrat",
            lineHeight: "55px",
            fontStyle: "normal",
            color: theme.colors.text,
          }}>
          User Reviews
        </h3>

        {/* FOR THE DESKTOP REVIEWS */}
        <div
          className={`reviews h-auto overflow-hidden phone:hidden tablet:flex justify-start items-center content-center ${styles.reviews}`}>
          <div
            className="transition-all duration-700 flex-center w-62 ml-0 mx-auto relative"
            style={{ marginLeft: `-${(shown - 3) * 298}px` }}>
            {reviews.map((el, i) => {
              return (
                <Containers
                  starCount={el.starCount}
                  title={el.title}
                  content={el.content}
                  userImg={el.userImg}
                  username={el.username}
                  key={(el.key * i).toString()}
                  extraClass={
                    width < 860 && i + 1 === shown - 1 && "absolute z-10"
                  }
                  styles={
                    width < 860 &&
                    i + 1 === shown - 1 && {
                      left: (shown - 3) * 298 + 160,
                      boxShadow: "2px 2px 30px 10px rgb(0,0,0,.4)",
                    }
                  }
                />
              );
            })}
          </div>
        </div>
        {/* FOR THE MOBILE REVIEWS */}
        <div>
          <div
            id="reviews"
            onTouchMove={handleTouchMove}
            onTouchStartCapture={handleTouchStart}
            onTouchEndCapture={handleTouchEnd}
            className={`phone:flex tablet:hidden overflow-hidden h-auto justify-start items-center relative ${styles.reviews}`}>
            <div
              id="reviews"
              className="transition-all duration-150 flex-left w-62 "
              style={{
                marginLeft: `-${
                  -(Movement.backward < 298 && Movement.backward) + mobile * 298
                }px`,
              }}>
              {reviews.map((el, i) => {
                return (
                  <Containers
                    starCount={el.starCount}
                    title={el.title}
                    content={el.content}
                    userImg={el.userImg}
                    username={el.username}
                    key={(el.key * i).toString()}
                    extraClass={""}
                    styles={""}
                  />
                );
              })}
            </div>
            {/* <div className="absolute w-12 min-h-full bg-black z-0 left-0 rounded-br-full rounded-tr-full bg-opacity-10 transition duration-150
">

            </div> */}
          </div>

          <div className="0 h-14 w-full phone:flex tablet:hidden flex-center my-4">
            {reviews.map((el, i) => {
              return (
                <>
                  {i === mobile ? (
                    <div
                      key={i * Math.random()}
                      className="p-2 bg-orange-400 rounded-full mx-1"></div>
                  ) : (
                    <div
                      onClick={() => setMobile(i)}
                      key={i * Math.random()}
                      className="p-1 bg-gray-300 rounded-full mx-1 cursor-pointer"></div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        {/* END OF MOBILE REVIEWS */}
        <div
          onClick={handlePrev}
          className={`icon-left text-4xl ${
            !movement.backward && "text-gray-500"
          }  absolute top-1/3 -ml-2 mt-16 left-0 phone:hidden tablet:flex`}>
          <IoIosArrowDropleftCircle />
        </div>
        <div
          onClick={handleNext}
          className={`icon-left text-4xl ${
            !movement.forward && "text-gray-500"
          } absolute top-1/3 -mr-2 mt-16 right-0 phone:hidden tablet:flex`}>
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
