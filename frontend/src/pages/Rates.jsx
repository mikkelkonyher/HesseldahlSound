import React from 'react';
import { Check, Zap, Headphones, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Rates = () => {
  const services = [
    {
      icon: <Headphones className="h-8 w-8 text-blue-400" />,
      title: "Mixing",
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
      ],
      popular: false
    },
    {
      icon: <Music className="h-8 w-8 text-blue-400" />,
      title: "Stereo Mastering",
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
      ],
      popular: true
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Stem Mastering",
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
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Rates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio services with transparent pricing. All rates include VAT and one free revision.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative bg-gray-900/50 border transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                service.popular 
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
                  : 'border-blue-900/30 hover:border-blue-500/50'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  {service.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-400">
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

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    service.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-400" />
                Turnaround Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Mixing:</strong> 3-5 business days</li>
                <li>• <strong className="text-white">Mastering:</strong> 1-2 business days</li>
                <li>• <strong className="text-white">Rush orders:</strong> Available for additional fee</li>
                <li>• <strong className="text-white">Revisions:</strong> 24-48 hours</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Check className="h-6 w-6 text-blue-400" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
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
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch to discuss your specific needs and receive a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Contact Us
                </Button>
              </a>
              <a href="/files">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-950 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  How to Send Files
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;