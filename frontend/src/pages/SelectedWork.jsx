import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

const SelectedWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      artist: "Luna Eclipse",
      album: "Midnight Reveries",
      year: "2024",
      genre: "Electronic",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "A haunting electronic masterpiece with ethereal vocals"
    },
    {
      id: 2,
      artist: "The Neon Collective",
      album: "Synthwave Dreams",
      year: "2024",
      genre: "Synthwave",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275e?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "Retro-futuristic sounds with modern production"
    },
    {
      id: 3,
      artist: "Cosmic Drift",
      album: "Stellar Odyssey",
      year: "2023",
      genre: "Ambient",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "Expansive ambient landscapes for deep meditation"
    },
    {
      id: 4,
      artist: "Digital Phantom",
      album: "Ghost in the Machine",
      year: "2023",
      genre: "Techno",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "Underground techno with industrial influences"
    },
    {
      id: 5,
      artist: "Azure Skyline",
      album: "Urban Echoes",
      year: "2023",
      genre: "Hip-Hop",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "Contemporary hip-hop with jazz-influenced samples"
    },
    {
      id: 6,
      artist: "Voltage Theory",
      album: "Electric Dreams",
      year: "2024",
      genre: "Electronic Rock",
      image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=400&fit=crop&crop=entropy&auto=format&fm=jpg&q=60",
      description: "High-energy fusion of electronic and rock elements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16 relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(95,211,243,0.08),transparent_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/20 via-cyan-300/30 to-cyan-300/20 rounded-xl blur-lg opacity-50"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              SELECTED WORK
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover some of my recent projects and hear the difference professional mixing and mastering makes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative">
                <img 
                  src={project.image}
                  alt={`${project.artist} - ${project.album}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-90' : 'opacity-60'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1 tracking-wide">
                      {project.artist}
                    </h3>
                    <p className="text-cyan-300 font-medium mb-1">
                      {project.album}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        {project.year}
                      </span>
                      <span className="text-sm text-cyan-300 bg-cyan-300/10 px-2 py-1 rounded border border-cyan-300/20">
                        {project.genre}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="relative p-6 bg-gray-900/20 border-t border-cyan-300/10">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-gray-900/40 via-gray-900/60 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-cyan-300/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 via-transparent to-cyan-500/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-gray-300 mb-6 tracking-wide">
                  Interested in a fresh take on your tracks?
              </p>
              <a href="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25">
                  START YOUR PROJECT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;