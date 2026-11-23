import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00383E] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Image src="/wb-logo-horizontal.png" alt="Williams Builders" width={240} height={70} className="mx-auto mb-5 h-auto w-[220px] brightness-0 invert" />

        <p>204-999-4339</p>
        <p>info@williamsbuilders.ca</p>
        <p>Licensed & Insured</p>

        <p className="mt-6 text-sm text-gray-300">
          Serving Winnipeg, surrounding communities,
          and Whiteshell Provincial Park.
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 Williams Builders
        </p>
      </div>
    </footer>
  );
}