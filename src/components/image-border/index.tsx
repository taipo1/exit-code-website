import { StaticImageData } from "next/image";
import Image from "../base/base-image";
import RevealWrapper from "../gsap/reveal-wrapper";
import MouseTracker from "../gsap/mouse-tracker";

type ImageBorderProps = {
  className: string;
  height: number;
  width: number;
  src: StaticImageData ;
}
const ImageBorder = ({className, height, width , src}: ImageBorderProps): JSX.Element => (
<RevealWrapper className="relative w-full h-full" Element="div" >
      
        <MouseTracker className="relative z-30">
          <RevealWrapper Element={"div"} className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                width={width}
                height={height}
                src={src || "https://via.placeholder.com/505x337"}
                alt=""
              />
          </RevealWrapper>
        </MouseTracker>
          <RevealWrapper delay={.3} Element="div" className={`w-full h-full absolute border-[8px]  md:border-[12px] rounded-lg border-primary-300 z-20 ${className}`} />
  </RevealWrapper>
)

export default ImageBorder;