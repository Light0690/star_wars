import { useEffect,useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UIVideo.module.css';


const UIVideo = ({
  src,
  classes,
  playbackRate=1.0
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
      videoRef.current.playbackRate = playbackRate;
    },[])

    return (
      <video 
        loop
        autoPlay
        muted
        className={cn(styles.video,classes)}
        ref={videoRef}
      >
        <source src={src} />
      </video>
    )
}


UIVideo.propTypes = {
  src : PropTypes.string,
  classes : PropTypes.string,
  playbackRate : PropTypes.number,
}
export default UIVideo;
