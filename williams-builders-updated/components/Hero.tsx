
import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6">

      <div className="mb-6">
        <Image
          src="/logo-f8f5ee.png"
          alt="Williams Builders Ltd."
          width={550}
          height={550}
          priority
          className="w-full max-w-[90vw] sm:max-w-[600px] mx-auto h-auto"
        />
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-[#1D3A22] mb-6">
        Built Right.
        <br />
        Built to Last.
      </h1>

      <p className="max-w-2xl text-lg md:text-xl mb-10">
        Custom homes, renovations, decks, garages, and outdoor
        spaces crafted with pride across Winnipeg, surrounding
        communities, and Whiteshell Provincial Park.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#quote"
          className="bg-[#1D3A22] text-white px-8 py-4 rounded-lg hover:bg-[#B78B3A] transition"
        >
          Request a Quote
        </a>

        <a
          href="#projects"
          className="border border-[#1D3A22] px-8 py-4 rounded-lg hover:bg-white transition"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}