export default function Services() {
  const services = [
    {
      title: "Custom Homes",
      description: "Thoughtfully built homes designed around your lifestyle and vision.",
    },
    {
      title: "Renovations",
      description: "Transforming existing spaces with quality craftsmanship.",
    },
    {
      title: "Decks & Outdoor Living",
      description: "Beautiful outdoor spaces built for Manitoba summers.",
    },
    {
      title: "Garages & Shops",
      description: "Functional structures built to last for work, storage, and recreation.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1D3A22] mb-12">
          What We Build
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}