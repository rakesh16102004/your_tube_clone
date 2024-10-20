import React from 'react'
import './Yourvideo.css'
import vid from '../../Components/Video/vid.mp4'
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import { useSelector } from 'react-redux'
const Yourvideo = () => {
    const currentuser = useSelector(state => state.currentuserreducer);
    const yourvideolist=useSelector(s=>s.videoreducer)?.data?.filter(q=>q.videochanel===currentuser?.result._id).reverse()
    // const Yourvideolist = [
    //     {
    //       _id:1,
    //       video_src:vid,
    //       chanel:"asdabdiabdassudfosfi",
    //       title:"video 1",
    //       uploader:"abc",
    //       description: "Description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src:vid,
    //       chanel:"asdabdiabdassudfosfi",
    //       title:"video 2",
    //       uploader:"abc",
    //       description: "Description of video 2"
    //     },
    //     {
    //       _id:3,
    //       video_src:vid,
    //       chanel:"asdabdiabdassudfosfi",
    //       title:"video 3",
    //       uploader:"abc",
    //       description: "Description of video 3"
    //     },
    //     {
    //       _id:4,
    //       video_src:vid,
    //       chanel:"asdabdiabdassudfosfi",
    //       title:"video 4",
    //       uploader:"abc",
    //       description: "Description of video 4"
    //     }
    //   ]
  return (
    <div className="container_Pages_App">
        <Leftsidebar />
        <div className="container2_Pages_App">
            <div className="container_yourvideo">
                 <h1>Your video</h1>
                 {
                    currentuser ? (
                        <>
                            <Showvideogrid vid= {yourvideolist}/>
                        </>
                    ):(
                        <>
                            <h3>Please login to see your video upload video list</h3>
                        </>
                    )
                 }
            </div>
        </div>
    </div>

  )
}

export default Yourvideo
