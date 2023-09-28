import { Fragment } from "react";
import * as Videos from "../assets/video/index";

const FooterAnimatedLoop = () => {
  return (
    <Fragment>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover object-center min-h-[120px] max-h-[175px] "
        id="zebec_banner_video"
      >
        <source src={Videos.ZebecStreamLightVid} type="video/mp4" />
      </video>
    </Fragment>
  );
};

export default FooterAnimatedLoop;
