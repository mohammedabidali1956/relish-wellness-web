import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { clinicCarouselPhotos } from "@/data/clinicCarouselPhotos";

const ClinicPhotoCarousel: React.FC = () => {
  const [isAutoplayPaused, setIsAutoplayPaused] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const carouselOptions = React.useMemo(() => ({
    align: "start" as const,
    loop: !prefersReducedMotion,
    slidesToScroll: 1,
    duration: 25,
    watchDrag: !prefersReducedMotion,
  }), [prefersReducedMotion]);
  const [carouselRef, carouselApi] = useEmblaCarousel(carouselOptions);

  React.useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  React.useEffect(() => {
    if (!carouselApi || isAutoplayPaused || prefersReducedMotion) {
      return;
    }

    const autoplayTimer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        carouselApi.scrollNext();
      }
    }, 2300);

    return () => window.clearInterval(autoplayTimer);
  }, [carouselApi, isAutoplayPaused, prefersReducedMotion]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setIsAutoplayPaused(true);
      carouselApi?.scrollPrev(prefersReducedMotion);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setIsAutoplayPaused(true);
      carouselApi?.scrollNext(prefersReducedMotion);
    }
  };

  return (
    <section
      id="clinic-photo-carousel"
      className="w-full border-b border-[#e5dec9] bg-[#f4ede0] px-2 py-1 sm:px-3"
      aria-label="Clinic and physiotherapy photos"
    >
      <div
        ref={carouselRef}
        className="clinic-photo-carousel overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Clinic and physiotherapy photos"
        aria-live="off"
        aria-keyshortcuts="ArrowLeft ArrowRight"
        tabIndex={0}
        onFocus={() => setIsAutoplayPaused(true)}
        onPointerDown={() => setIsAutoplayPaused(true)}
        onKeyDown={handleKeyDown}
      >
        <div className="clinic-photo-track flex touch-pan-y">
          {clinicCarouselPhotos.map((photo, index) => (
            <div
              key={photo.filename}
              className="clinic-photo-slide min-w-0 shrink-0 grow-0 basis-[72%] px-1 sm:basis-[42%] lg:basis-1/3"
              role="group"
              aria-roledescription="slide"
              aria-label={`Photo ${index + 1} of ${clinicCarouselPhotos.length}`}
            >
              <div className="flex h-[170px] items-center justify-center overflow-hidden bg-white sm:h-[210px] lg:h-[240px]">
                <img
                  src={`/images/clinic-photo-carousel/${photo.filename}`}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "low" : "auto"}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicPhotoCarousel;
