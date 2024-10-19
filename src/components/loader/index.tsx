"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const leftEyeRef = useRef<SVGCircleElement | null>(null);
  const rightEyeRef = useRef<SVGCircleElement | null>(null);
  const leftPupilRef = useRef<SVGCircleElement | null>(null);
  const rightPupilRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (loaderRef.current) {

      gsap.to(loaderRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        },
      });

      gsap.to(leftPupilRef.current, {
        x: 22,
        duration: .7,
        repeat: 1,
        yoyo: true,
        ease: 'power1.easeInOut',
      })
    }
  }, []);
  return (
    <div ref={loaderRef} className="fixed inset-0 flex items-center justify-center bg-dark-500 z-50">
      <svg  width="189" height="140" viewBox="0 0 189 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* left eye */}
        <path ref={leftEyeRef} d="M51.7962 140C36.0655 140 23.4682 135.385 14.0042 126.154C4.66805 116.795 0 103.141 0 85.1923V54.8077C0 36.859 4.66805 23.2692 14.0042 14.0385C23.4682 4.67949 36.0655 0 51.7962 0C67.399 0 79.2929 4.42308 87.478 13.2692C95.791 21.9872 99.9475 33.9103 99.9475 49.0385V50H87.6699V48.6538C87.6699 37.6282 84.7283 28.6538 78.8453 21.7308C73.0902 14.6795 64.0738 11.1539 51.7962 11.1539C39.3907 11.1539 29.6709 14.9359 22.6369 22.5C15.7307 30.0641 12.2776 40.7051 12.2776 54.4231V85.5769C12.2776 99.2949 15.7307 109.936 22.6369 117.5C29.6709 125.064 39.3907 128.846 51.7962 128.846C64.0738 128.846 73.0902 125.385 78.8453 118.462C84.7283 111.41 87.6699 102.372 87.6699 91.3462V88.4615H99.9475V90.9615C99.9475 106.09 95.791 118.077 87.478 126.923C79.2929 135.641 67.399 140 51.7962 140Z" fill="#FF4747"/>
        {/* right eye */}
        <path ref={rightEyeRef} d="M137.204 140C152.934 140 165.532 135.385 174.996 126.154C184.332 116.795 189 103.141 189 85.1923V54.8077C189 36.859 184.332 23.2692 174.996 14.0385C165.532 4.67949 152.934 0 137.204 0C121.601 0 109.707 4.42308 101.522 13.2692C93.209 21.9872 89.0525 33.9103 89.0525 49.0385V50H101.33V48.6538C101.33 37.6282 104.272 28.6538 110.155 21.7308C115.91 14.6795 124.926 11.1539 137.204 11.1539C149.609 11.1539 159.329 14.9359 166.363 22.5C173.269 30.0641 176.722 40.7051 176.722 54.4231V85.5769C176.722 99.2949 173.269 109.936 166.363 117.5C159.329 125.064 149.609 128.846 137.204 128.846C124.926 128.846 115.91 125.385 110.155 118.462C104.272 111.41 101.33 102.372 101.33 91.3462V88.4615H89.0525V90.9615C89.0525 106.09 93.209 118.077 101.522 126.923C109.707 135.641 121.601 140 137.204 140Z" fill="#FF4747"/>
        {/* left pupil */}
        <path ref={leftPupilRef} d="M9.43986 61.1103H42.0161V79.2525H9.43986V61.1103Z" fill="#FF4747"/>
        {/* right pupil */}
        <path ref={rightPupilRef} d="M128.886 61.1103H150.604V79.2525H128.886V61.1103Z" fill="#FF4747"/>
      </svg>
    </div>
  );
};

export { Loader };