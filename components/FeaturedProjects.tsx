"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const whiteshellGallery = [
  {
    src: "/projects/whiteshell-siding/whiteshell-siding-front.webp",
    alt: "Exterior siding installation on a Whiteshell Provincial Park cabin with stone chimney and exposed Canadian Shield granite",
  },
  {
    src: "/projects/whiteshell-siding/whiteshell-siding-wide.webp",
    alt: "Whiteshell cabin exterior showing new siding surrounded by mature trees and exposed granite",
  },
  {
    src: "/projects/whiteshell-siding/whiteshell-siding-side.webp",
    alt: "Side elevation of a Whiteshell cabin showing the completed exterior siding installation",
  },
  {
    src: "/projects/whiteshell-siding/whiteshell-siding-stone-detail.webp",
    alt: "Close-up detail of exterior cladding finished neatly against the existing stone chimney",
  },
];

const garageGallery = [
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-overhead-door-tyvek.webp",
    alt: "Winnipeg detached garage with overhead door installed and Tyvek house wrap on the exterior walls",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-front.webp",
    alt: "Detached garage under construction in Winnipeg with wall and roof sheathing completed",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-framed-front.webp",
    alt: "Front view of a Winnipeg detached garage during structural framing and sheathing",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-roof-framing.webp",
    alt: "Interior view of roof trusses and wall framing inside a detached garage in Winnipeg",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-wall-framing.webp",
    alt: "Wall framing stage of a detached garage build in Winnipeg",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-rear-sheathing.webp",
    alt: "Rear wall sheathing and framed door opening on a Winnipeg detached garage",
  },
  {
    src: "/projects/winnipeg-garage/winnipeg-garage-start-framing.webp",
    alt: "Early wall framing stage on the concrete pad for a detached garage in Winnipeg",
  },
];

type GalleryName = "whiteshell" | "garage";

type ActiveGallery = {
  name: GalleryName;
  index: number;
} | null;

const galleries = {
  whiteshell: {
    images: whiteshellGallery,
    label: "Whiteshell exterior siding photo gallery",
  },
  garage: {
    images: garageGallery,
    label: "Winnipeg detached garage photo gallery",
  },
} as const;

export default function FeaturedProjects() {
  const [activeGallery, setActiveGallery] = useState<ActiveGallery>(null);

  const openGallery = (name: GalleryName, index: number) => {
    setActiveGallery({ name, index });
  };

  useEffect(() => {
    if (activeGallery === null) return;

    const activeImages = galleries[activeGallery.name].images;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
      }

      if (event.key === "ArrowRight") {
        setActiveGallery((current) =>
          current === null
            ? null
            : {
                ...current,
                index: (current.index + 1) % activeImages.length,
              },
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveGallery((current) =>
          current === null
            ? null
            : {
                ...current,
                index:
                  (current.index - 1 + activeImages.length) %
                  activeImages.length,
              },
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  const activeGalleryData = activeGallery
    ? galleries[activeGallery.name]
    : null;

  return (
    <section id="projects" className="bg-[#F8F5EE] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#1D3A22]">
          Featured Projects
        </h2>

        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="bg-[#F8F5EE]">
            <button
              type="button"
              onClick={() => openGallery("whiteshell", 0)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-gray-200 text-left md:aspect-[16/8]"
              aria-label="Open Whiteshell exterior siding photo gallery"
            >
              <Image
                src={whiteshellGallery[0].src}
                alt={whiteshellGallery[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority
              />
            </button>

            <div className="mt-1 grid gap-1 sm:grid-cols-3">
              {whiteshellGallery.slice(1).map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => openGallery("whiteshell", index + 1)}
                  className="group relative aspect-[4/3] overflow-hidden bg-gray-200 text-left"
                  aria-label={`Open Whiteshell siding gallery photo ${index + 2}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-7 md:p-9">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#5E765E]">
              Whiteshell Provincial Park
            </p>
            <h3 className="text-2xl font-semibold text-[#1D3A22] md:text-3xl">
              Exterior Siding
            </h3>
            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Exterior siding installation on a cabin in Whiteshell Provincial
              Park, including detailed finishing around the existing stonework
              and architectural features.
            </p>
          </div>
        </article>

        <article className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="bg-[#F8F5EE]">
            <button
              type="button"
              onClick={() => openGallery("garage", 0)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-gray-200 text-left md:aspect-[16/8]"
              aria-label="Open Winnipeg detached garage photo gallery"
            >
              <Image
                src={garageGallery[0].src}
                alt={garageGallery[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </button>

            <div className="mt-1 grid gap-1 sm:grid-cols-3">
              {garageGallery.slice(1, 4).map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => openGallery("garage", index + 1)}
                  className="group relative aspect-[4/3] overflow-hidden bg-gray-200 text-left"
                  aria-label={`Open garage gallery photo ${index + 2}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {index === 2 && (
                    <span className="absolute inset-0 flex items-end justify-end bg-black/20 p-4 transition-colors group-hover:bg-black/30">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#1D3A22] shadow-sm">
                        View all {garageGallery.length} photos
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-7 md:p-9">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#5E765E]">
              Winnipeg, Manitoba
            </p>
            <h3 className="text-2xl font-semibold text-[#1D3A22] md:text-3xl">
              Detached Garage
            </h3>
            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              New detached garage construction in Winnipeg, including wall and
              roof framing, sheathing, and structural framing.
            </p>
          </div>
        </article>

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Deck & Outdoor Living</h3>
            <p className="mt-2 text-gray-600">Winnipeg, MB</p>
          </div>
        </div>
      </div>

      {activeGallery !== null && activeGalleryData !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeGalleryData.label}
          onClick={() => setActiveGallery(null)}
        >
          <button
            type="button"
            onClick={() => setActiveGallery(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-2xl text-white backdrop-blur transition hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery((current) =>
                current === null
                  ? null
                  : {
                      ...current,
                      index:
                        (current.index - 1 + activeGalleryData.images.length) %
                        activeGalleryData.images.length,
                    },
              );
            }}
            className="absolute left-3 z-10 rounded-full bg-white/10 px-4 py-3 text-3xl text-white backdrop-blur transition hover:bg-white/20 md:left-8"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeGalleryData.images[activeGallery.index].src}
              alt={activeGalleryData.images[activeGallery.index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
              {activeGallery.index + 1} / {activeGalleryData.images.length}
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery((current) =>
                current === null
                  ? null
                  : {
                      ...current,
                      index: (current.index + 1) % activeGalleryData.images.length,
                    },
              );
            }}
            className="absolute right-3 z-10 rounded-full bg-white/10 px-4 py-3 text-3xl text-white backdrop-blur transition hover:bg-white/20 md:right-8"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
