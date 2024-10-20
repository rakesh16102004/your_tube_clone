import React, { useEffect, useRef, useState } from "react";
import "./Videopage.css";
import moment from "moment";
import Likewatchlatersavebtns from "./Likewatchlatersavebtns";
import { useParams, Link } from "react-router-dom";
import Comment from "../../Components/Comment/Comment";
import { viewvideo } from "../../action/video";
import { addtohistory } from "../../action/history";
import { useSelector, useDispatch } from "react-redux";

const Videopage = () => {
  const { vid } = useParams();
  const dispatch = useDispatch();
  const vids = useSelector((state) => state.videoreducer);
  const vv = vids?.data.filter((q) => q._id === vid)[0];
  const currentuser = useSelector((state) => state.currentuserreducer);

  const [currentPlan, setCurrentPlan] = useState("Free");
  const [maxWatchTime, setMaxWatchTime] = useState(5);
  const videoRef = useRef(null);


  const handleviews = () => {
    dispatch(viewvideo({ id: vid }));
  };

  const handlehistory = () => {
    dispatch(
      addtohistory({
        videoid: vid,
        viewer: currentuser?.result._id,
      })
    );
  };

  useEffect(() => {
    if (currentuser) {
      handlehistory();
    }
    handleviews();
  }, []);

  const switchPlan = (plan) => {
    let timeLimit;
    switch (plan) {
      case "Free":
        timeLimit = 5;
        break;
      case "Bronze":
        timeLimit = 7;
        break;
      case "Silver":
        timeLimit = 10;
        break;
      case "Gold":
        timeLimit = Infinity;
        break;
      default:
        timeLimit = 5;
        break;
    }
    setMaxWatchTime(timeLimit);
    setCurrentPlan(plan);
    alert(
      `Switched to ${plan} plan with ${
        timeLimit === Infinity ? "unlimited" : timeLimit
      } minutes watch time.`
    );
  };

  const handleGesture = (e) => {
    const videoElement = videoRef.current;
    if (!videoElement) return; 

    if (e.detail === 2 && e.clientX > window.innerWidth / 2) {
      videoElement.currentTime += 10;
    } else if (e.detail === 2 && e.clientX < window.innerWidth / 2) {
      videoElement.currentTime -= 10;
    } else if (e.detail === 1) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    } else if (e.detail === 3 && e.clientX > window.innerWidth / 2) {
      window.close();
    } else if (e.detail === 3 && e.clientX < window.innerWidth / 2) {
      alert("Comments feature coming soon!");
    }
  };

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              ref={videoRef}
              src={`http://localhost:5000/${vv?.filepath}`}
              className="video_ShowVideo_videoPage"
              controls
              onGestureStart={handleGesture}
            ></video>
            <div className="resolution_plan_buttons">
              <h3>Select Resolution:</h3>
              <button onClick={() => alert("Switched to 320p resolution")}>
                320p
              </button>
              <button onClick={() => alert("Switched to 480p resolution")}>
                480p
              </button>
              <button onClick={() => alert("Switched to 720p resolution")}>
                720p
              </button>
              <button onClick={() => alert("Switched to 1080p resolution")}>
                1080p
              </button>
            </div>
            <div className="plan_buttons">
              <h3>Select Plan:</h3>
              <button onClick={() => switchPlan("Free")}>Free</button>
              <button onClick={() => switchPlan("Bronze")}>Bronze</button>
              <button onClick={() => switchPlan("Silver")}>Silver</button>
              <button onClick={() => switchPlan("Gold")}>Gold</button>
            </div>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.title}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdat).fromNow()}
                  </div>
                  <Likewatchlatersavebtns vv={vv} vid={vid} />
                </div>
              </div>
              <Link to={"/"} className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.uploader}</p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comment videoid={vv?._id} />
              </div>
            </div>
          </div>

          <div className="moreVideoBar">More videos</div>
        </div>
      </div>
    </>
  );
};

export default Videopage;
