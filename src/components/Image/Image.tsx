import { FC } from "react";

/**
 * Компоненет отрисовки картинок
 */

export interface Img {
    containerClass: string,
    imgClass: string,
    src: string,
    alt: string,
}

export const Image: FC<Img> = (props) => {
    const {containerClass, imgClass, src, alt } = props;
  
    return (
      <div className={containerClass}>
        <img className={imgClass} src={src} alt={alt} />
      </div>
    );
  }