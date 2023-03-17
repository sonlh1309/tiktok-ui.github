import { useState , forwardRef } from "react";
import images from "../../assets/images";
import classNames from "classnames/bind";
import styles from './Image.module.scss'


const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback); 
  }

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src} a
      lt={alt}
      {...props}
      onError={handleError}
    />
  );
});  
export default Image;