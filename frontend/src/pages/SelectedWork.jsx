import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover some of our recent projects and hear the difference professional mixing and mastering makes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-gray-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
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
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.artist}
                    </h3>
                    <p className="text-blue-300 font-medium mb-1">
                      {project.album}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        {project.year}
                      </span>
                      <span className="text-sm text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                        {project.genre}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className={`absolute top-4 right-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
                        <Play className="h-4 w-4" />
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to hear your music at this level?
          </p>
          <a href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Your Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;