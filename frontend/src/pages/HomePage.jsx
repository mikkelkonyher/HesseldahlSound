import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const features = [
    {
      title: "Professional Mixing",
      description: "Industry-standard mixing techniques with attention to every detail"
    },
    {
      title: "Mastering Excellence", 
      description: "Both stereo and stem mastering options for maximum sonic impact"
    },
    {
      title: "Quick Turnaround",
      description: "Professional results delivered efficiently without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(95,211,243,0.1),transparent_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            {/* Main heading with futuristic glow */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300/20 via-cyan-300/30 to-cyan-300/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <h1 className="relative text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                <span className="block">HESSELDAHL</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  SOUND
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional audio mixing and mastering that brings your music to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/work">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25 border-0"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/50 to-cyan-500/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <span className="relative">VIEW OUR WORK</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/rates">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-cyan-300 text-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-200 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  SEE RATES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative inline-block w-full text-center mb-12">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/10 via-cyan-300/20 to-cyan-300/10 rounded-xl blur-lg opacity-50"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-white tracking-wide">
              WHY CHOOSE HESSELDAHL SOUND?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="relative bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm group overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/10 via-cyan-500/10 to-cyan-300/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <CardContent className="relative p-8 text-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-gray-900/40 via-gray-900/60 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-cyan-300/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 via-transparent to-cyan-500/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                READY TO ELEVATE YOUR SOUND?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and bring your music to the next level
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/50 to-cyan-500/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <span className="relative">GET STARTED</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;