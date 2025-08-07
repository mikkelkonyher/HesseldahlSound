import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
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
              ABOUT MIKKEL HESSELDAHL KONYHER
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio engineering services that bring your musical vision to life
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/20 to-cyan-500/20 rounded-full blur-lg opacity-50"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-300/30 bg-gray-900/50 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&fm=jpg&q=60" 
                alt="Mikkel Hesseldahl Konyher - Audio Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">Mikkel Hesseldahl Konyher</h2>
            <p className="text-cyan-300 font-medium">Audio Engineer & Producer</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-gray-900/20 p-8 rounded-xl border border-cyan-300/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">MY STORY</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My passion for audio engineering began years ago when I first discovered the transformative power of professional mixing and mastering. What started as curiosity evolved into a dedicated craft, where I've honed my skills to deliver exceptional sonic experiences for artists across genres.
                </p>
                <p>
                  Working from my professionally treated studio, I focus on bringing out the unique character and emotion in every track I work with. My approach combines technical precision with creative intuition, ensuring that each project receives the individual attention it deserves.
                </p>
                <p>
                  I believe that great audio production is not just about technical perfection—it's about understanding the artist's vision and translating that into a sound that connects with listeners on a deeper level.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-gray-900/20 p-8 rounded-xl border border-cyan-300/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">MY PHILOSOPHY</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Every project that comes through my studio doors is treated with the same level of dedication and care. I understand that your music represents countless hours of creativity and emotion, and I'm committed to honoring that investment with professional results.
                </p>
                <p>
                  My process is collaborative and transparent. I maintain open communication throughout each project, ensuring you're involved in every crucial decision while benefiting from my technical expertise and creative insights.
                </p>
                <p>
                  Quality and attention to detail are non-negotiable in my work. From the initial consultation to final delivery, I'm dedicated to exceeding your expectations and helping your music achieve its full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/10 via-cyan-300/20 to-cyan-300/10 rounded-xl blur-lg opacity-50"></div>
            <h2 className="relative text-3xl font-bold text-white tracking-wide">
              WHAT I DO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mb-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  PROFESSIONAL MIXING
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I craft balanced, dynamic mixes that bring clarity and life to your individual tracks. Using industry-standard techniques and high-end processing, I ensure every element in your song has its perfect place in the sonic spectrum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mb-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  AUDIO MASTERING
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The final polish your music deserves. My mastering process enhances your mix with careful EQ, compression, and limiting to achieve commercial loudness while preserving the dynamics and emotional impact of your music.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mb-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  PERSONALIZED SERVICE
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a solo operation, I provide direct, personal communication throughout your project. You'll work directly with me from start to finish, ensuring your vision is understood and realized with complete artistic integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-gray-900/40 via-gray-900/60 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-cyan-300/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 via-transparent to-cyan-500/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
                LET'S WORK TOGETHER
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to take your music to the next level? I'm here to help bring your vision to life.
              </p>
              <a href="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 text-lg rounded-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;