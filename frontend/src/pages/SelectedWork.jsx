import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';

const SelectedWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      artist: "Apex Anima",
      album: "Elf F O",
      year: "2023",
      genre: "Electronic",
      image: "/assets/a1215708399_65.jpeg",
        description: "Apex Anima is the musical solo project of Icelandic artist Unnur Andrea, who won the Kraumur Music Award in 2023. Her debut album, \"Elf F O,\" was also named album of the year. Credits: Mix and mastering."
    },
    {
      id: 2,
      artist: "Takykardia",
      album: "Better Reworks",
      year: "2022",
      genre: "Electronic",
      image: "/assets/better.jpeg",
        description: "An EP featuring reworks by Dave Okumu, Jeppe Wolmer, and Debbie Sings. Credits: Stem mastering."
    },
    {
      id: 3,
      artist: "Hjalmer",
      album: "Lige Nu",
      year: "2018",
      genre: "Pop",
      image: "/assets/R-12749707-1541239956-4617.jpeg.jpg",
        description: "Single by Danish artist Hjalmer, written by Hjalmer Larsen, Thor Nørgaard, Lasse Lyngbo, and Peter Sommer. Produced by Pitchshifters. Mixed by Mads Brinch, Lasse Lyngbo, and Thor Nørgaard. Credits: Mastering. Note: Album version mastered by Anders Schumann."
    },
    {
      id: 4,
      artist: "Lydmor",
      album: "Vild",
      year: "2018",
      genre: "Electronic",
      image: "/assets/R-13044790-1547056154-5668.jpeg.webp",
        description: "Single by Danish artist Lydmor, written by Jenny Rossander, Lasse Lyngbo, Mads Møller & Thor Nørgaard. Nominated for the Robert Award for Best Original Song (Danish Film Academy) for its inclusion in the film Vildheks. Credits: Mastering."
    },
    {
      id: 5,
      artist: "Simon Glöde",
      album: "Everything In It's Time",
      year: "2025",
      genre: "Indie Folk",
      image: "/assets/1200x630bb.jpg",
        description: "EP by globe-trotting singer-songwriter Simon Glöde, featuring tracks recorded across several countries. Includes 'Everything In It's Time', 'Home', 'Calm In The Mountains' and an instrumental version of the title track. Credits: Mix and mastering."
    },
    {
      id: 6,
      artist: "Soulfried",
      album: "Chonk Lé Fonk",
      year: "2024",
      genre: "Funk/Jazz Fusion",
      image: "/assets/ab67616d0000b273b75c925bf321fef953a592da.jpeg",
        description: "Album by Copenhagen‑based funk‑jazz collective SoulFried. Released February 16, 2024, featuring six tracks including “Sexy Coffee Pot”, “Dim Sum”, and the title track. Credits: Mix and mastering."
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
              A small selection of work I’ve contributed to
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

                <div className="relative aspect-square w-full flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={`${project.artist} - ${project.album}`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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