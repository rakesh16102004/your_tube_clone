import React, { useEffect } from 'react';
import Describechannel from './Describechannel';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid';
import vid from '../../Components/Video/vid.mp4';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Channel = ({ setvideouploadpage, seteditcreatechanelbtn }) => {
  const { cid } = useParams();
  const vids=useSelector(state=>state.videoreducer)?.data?.filter(q=>q?.videochanel===cid).reverse()

  // const vids = [
  //   {
  //     _id: "1",
  //     video_src: vid,
  //     chanel: "Channel 1",
  //     title: "Video 1",
  //     uploader: "abc",
  //     description: "Description of video 1",
  //     views: 100,
  //     createdat: new Date(),
  //   },
  //   {
  //     _id: "2",
  //     video_src: vid,
  //     chanel: "Channel 2",
  //     title: "Video 2",
  //     uploader: "abc2",
  //     description: "Description of video 2",
  //     views: 200,
  //     createdat: new Date(),
  //   },
  //   {
  //     _id: "3",
  //     video_src: vid,
  //     chanel: "Channel 3",
  //     title: "Video 3",
  //     uploader: "abc3",
  //     description: "Description of video 3",
  //     views: 200,
  //     createdat: new Date(),
  //   },
  //   {
  //     _id: "4",
  //     video_src: vid,
  //     chanel: "Channel 4",
  //     title: "Video 4",
  //     uploader: "abc4",
  //     description: "Description of video 4",
  //     views: 200,
  //     createdat: new Date(),
  //   },
  // ];

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel cid={cid} setvideouploadpage={setvideouploadpage} seteditcreatechanelbtn={seteditcreatechanelbtn} />
        <Showvideogrid vids={vids} />
      </div>
    </div>
  );
};

export default Channel;


