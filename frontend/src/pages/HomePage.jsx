import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Headphones, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const features = [
    {
      icon: <Headphones className="h-8 w-8 text-blue-400" />,
      title: "Professional Mixing",
      description: "Industry-standard mixing techniques with attention to every detail"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Mastering Excellence",
      description: "Both stereo and stem mastering options for maximum sonic impact"
    },
    {
      icon: <Play className="h-8 w-8 text-blue-400" />,
      title: "Quick Turnaround",
      description: "Professional results delivered efficiently without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="block">Hesseldahl</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
                Sound
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional audio mixing and mastering that brings your music to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/work">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/rates">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-950 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  See Rates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Hesseldahl Sound?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Sound?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and bring your music to the next level
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;