export default function FeaturedProjects() {
  const projects = [
    {
      title: "Custom Home Project",
      location: "Whiteshell Provincial Park",
    },
    {
      title: "Deck & Outdoor Living",
      location: "Winnipeg, MB",
    },
    {
      title: "Garage & Shop Build",
      location: "East St. Paul, MB",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1D3A22] mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300" />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}