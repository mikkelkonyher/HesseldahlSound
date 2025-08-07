import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Rates = () => {
  const services = [
    {
      title: "MIXING",
      price: "336€",
      priceDKK: "2,500 DKK",
      description: "Professional mixing service with detailed attention to every element of your track",
      features: [
        "Complete mix from individual stems",
        "EQ, compression, and effects processing",
        "Stereo imaging and spatial enhancement",
        "One free revision included",
        "High-quality WAV delivery",
        "All prices include VAT"
      ]
    },
    {
      title: "STEREO MASTERING",
      price: "67€",
      priceDKK: "500 DKK",
      description: "Professional mastering for your stereo mix to achieve commercial loudness and clarity",
      features: [
        "Stereo mastering from your final mix",
        "EQ and compression optimization",
        "Loudness and dynamics control",
        "One free revision included",
        "Multiple format delivery",
        "All prices include VAT"
      ]
    },
    {
      title: "STEM MASTERING",
      price: "120€",
      priceDKK: "900 DKK",
      description: "Advanced mastering using individual stems for maximum control and sonic impact",
      features: [
        "Mastering from grouped stems",
        "Individual stem processing",
        "Enhanced dynamic control",
        "One free revision included",
        "Premium sonic quality",
        "All prices include VAT"
      ]
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
              MY RATES
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio services with transparent pricing. All rates include VAT and one free revision.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm group overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/10 via-cyan-500/10 to-cyan-300/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <CardHeader className="relative text-center pb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                <CardTitle className="text-2xl text-white mb-2 tracking-wide font-bold">
                  {service.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-cyan-300">
                    {service.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    ({service.priceDKK})
                  </span>
                  <p className="text-gray-400 text-sm mt-1">per song</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="relative pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/files">
                  <Button 
                    className="w-full transition-all duration-300 hover:scale-105 font-semibold tracking-wide bg-gray-700/50 hover:bg-gray-600/50 text-white border border-cyan-300/20 hover:border-cyan-300/40"
                  >
                    GET STARTED
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <CardHeader className="relative">
              <CardTitle className="text-white flex items-center gap-2 tracking-wide">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                TURNAROUND TIME
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Mixing:</strong> 3-5 business days</li>
                <li>• <strong className="text-white">Mastering:</strong> 1-2 business days</li>
                <li>• <strong className="text-white">Rush orders:</strong> Available for additional fee</li>
                <li>• <strong className="text-white">Revisions:</strong> 24-48 hours</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <CardHeader className="relative">
              <CardTitle className="text-white flex items-center gap-2 tracking-wide">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                WHAT'S INCLUDED
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">One free revision</strong> on all services</li>
                <li>• <strong className="text-white">Multiple formats:</strong> WAV, MP3, FLAC</li>
                <li>• <strong className="text-white">Professional quality</strong> guaranteed</li>
                <li>• <strong className="text-white">Direct communication</strong> throughout process</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-gray-900/40 via-gray-900/60 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-cyan-300/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 via-transparent to-cyan-500/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
                READY TO START YOUR PROJECT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch to discuss your specific needs and receive a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25">
                    CONTACT ME
                  </Button>
                </a>
                <a href="/files">
                  <Button variant="outline" className="border-cyan-300 text-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-200 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                    HOW TO SEND FILES
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;