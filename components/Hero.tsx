import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100svh-80px)] flex flex-col items-center justify-center text-center px-6 py-12 md:py-10">
      <div className="mb-4 w-full flex justify-center">
        <Image
          src="/wb-logo-vertical.png"
          alt="Williams Builders"
          width={420}
          height={480}
          priority
          className="w-[260px] sm:w-[300px] md:w-[330px] max-w-full h-auto"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#00474E] mb-4">
        Built Right.
        <br />
        Built to Last.
      </h1>

      <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-7">
        Custom homes, renovations, decks, garages, and outdoor spaces
        crafted with pride across Winnipeg, surrounding communities,
        and Whiteshell Provincial Park.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#quote"
          className="bg-[#00474E] text-white px-8 py-4 rounded-lg hover:bg-[#00A35A] transition"
        >
          Request a Quote
        </a>
        <a
          href="#projects"
          className="border border-[#00474E] px-8 py-4 rounded-lg hover:bg-white transition"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}
