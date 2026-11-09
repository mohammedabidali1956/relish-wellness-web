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
      id="homepage-gallery"
      className="relative left-1/2 col-span-full w-screen -translate-x-1/2 overflow-hidden"
      aria-labelledby="homepage-gallery-heading"
    >
      <h2
        id="homepage-gallery-heading"
        className="mb-4 px-4 text-center font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl"
      >
        Our Gallery
      </h2>
      <div
        ref={carouselRef}
        id="clinic-photo-carousel"
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
              className="clinic-photo-slide min-w-0 shrink-0 grow-0 basis-[90%] px-[9px] py-2 sm:basis-[62%] sm:px-[10px] lg:basis-[46%] lg:px-[11px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Photo ${index + 1} of ${clinicCarouselPhotos.length}`}
            >
              <div className="clinic-photo-frame rounded-[18px] border-[5px] border-[#102F50] bg-[#713B20] p-1 shadow-[0_7px_18px_rgba(16,47,80,0.16)]">
                <div className="rounded-[11px] bg-[#FFFDF8] p-1">
                  <img
                    src={`/images/clinic-photo-carousel/${photo.filename}`}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "low" : "auto"}
                    decoding="async"
                    className="clinic-photo-image block h-auto w-full aspect-[4/3] rounded-[6px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicPhotoCarousel;
