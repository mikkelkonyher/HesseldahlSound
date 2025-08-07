import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed"
    },
    {
      number: "200+",
      label: "Happy Artists"
    },
    {
      number: "10+",
      label: "Years Experience"
    },
    {
      number: "24/7",
      label: "Dedicated Service"
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
              ABOUT HESSELDAHL SOUND
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio engineering services that bring your musical vision to life
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-gray-900/20 p-8 rounded-xl border border-cyan-300/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">OUR STORY</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-gray-900/20 p-8 rounded-xl border border-cyan-300/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">OUR PHILOSOPHY</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                  quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
                  occaecati cupiditate non provident.
                </p>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et 
                  dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero 
                  tempore cum soluta nobis est eligendi optio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="relative inline-block w-full text-center mb-12">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/10 via-cyan-300/20 to-cyan-300/10 rounded-xl blur-lg opacity-50"></div>
            <h2 className="relative text-3xl font-bold text-white tracking-wide">
              BY THE NUMBERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <CardContent className="relative p-6 text-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mx-auto mb-4 rounded-full"></div>
                  <div className="text-3xl font-bold text-cyan-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/10 via-cyan-300/20 to-cyan-300/10 rounded-xl blur-lg opacity-50"></div>
            <h2 className="relative text-3xl font-bold text-white tracking-wide">
              WHAT WE DO
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mb-4 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  QUALITY ASSURANCE
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.
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
                Ready to take your music to the next level? We're here to help bring your vision to life.
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