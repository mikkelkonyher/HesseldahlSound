import React from 'react';
import { Upload, FolderOpen, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const HowToSendFiles = () => {
  const steps = [
    {
      step: 1,
      title: "PREPARE YOUR FILES",
      description: "Export your tracks as high-quality WAV or AIFF files (24-bit/44.1kHz minimum). Include both stereo mix and individual stems if needed.",
      details: [
        "Use 24-bit/44.1kHz or higher resolution",
        "Export without any mastering plugins", 
        "Leave about 3-6dB of headroom",
        "Include a rough reference mix"
      ]
    },
    {
      step: 2,
      title: "UPLOAD VIA CLOUD SERVICE",
      description: "Use services like Google Drive, Dropbox, or WeTransfer to share your files. Make sure the link is accessible and won't expire.",
      details: [
        "Google Drive (preferred)",
        "Dropbox or OneDrive",
        "WeTransfer for larger files", 
        "Set sharing permissions correctly"
      ]
    },
    {
      step: 3,
      title: "INCLUDE PROJECT INFORMATION",
      description: "Provide detailed information about your project, including genre, reference tracks, and any specific requests or concerns.",
      details: [
        "Song title and artist name",
        "Genre and target audience",
        "Reference tracks you like",
        "Specific mixing notes or requests"
      ]
    },
    {
      step: 4,
      title: "SEND VIA CONTACT FORM",
      description: "Use my contact form to send the download link along with all project details. I'll confirm receipt within 24 hours.",
      details: [
        "Fill out the contact form",
        "Include cloud storage link",
        "Add project information",
        "Specify desired turnaround time"
      ]
    }
  ];

  const fileFormats = [
    {
      format: "WAV",
      description: "Preferred format for highest quality"
    },
    {
      format: "AIFF", 
      description: "Alternative high-quality format"
    },
    {
      format: "24-BIT",
      description: "Minimum bit depth required"
    },
    {
      format: "44.1KHZ+",
      description: "Sample rate (higher is better)"
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
              HOW TO SEND YOUR FILES
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to ensure your project gets the best possible treatment
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Step Number */}
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle className="h-4 w-4 text-cyan-300 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* File Formats Section */}
        <div className="mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300/10 via-cyan-300/20 to-cyan-300/10 rounded-xl blur-lg opacity-50"></div>
            <h2 className="relative text-3xl font-bold text-white tracking-wide">
              ACCEPTED FILE FORMATS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fileFormats.map((format, index) => (
              <Card 
                key={index}
                className="bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <CardContent className="relative p-6 text-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mx-auto mb-4 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                    {format.format}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {format.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                READY TO GET STARTED?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have your files ready? Send them my way and let's create something amazing together.
              </p>
              <a href="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 px-8 py-3 text-lg rounded-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25">
                  SEND YOUR PROJECT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSendFiles;