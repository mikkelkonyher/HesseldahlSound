import React from 'react';
import { Upload, FolderOpen, Send, CheckCircle, Music, FileAudio } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const HowToSendFiles = () => {
  const steps = [
    {
      step: 1,
      icon: <FolderOpen className="h-8 w-8 text-blue-400" />,
      title: "Prepare Your Files",
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
      icon: <Upload className="h-8 w-8 text-blue-400" />,
      title: "Upload via Cloud Service",
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
      icon: <FileAudio className="h-8 w-8 text-blue-400" />,
      title: "Include Project Information",
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
      icon: <Send className="h-8 w-8 text-blue-400" />,
      title: "Send via Contact Form",
      description: "Use our contact form to send the download link along with all project details. We'll confirm receipt within 24 hours.",
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
      icon: <Music className="h-6 w-6 text-blue-400" />,
      format: "WAV",
      description: "Preferred format for highest quality"
    },
    {
      icon: <Music className="h-6 w-6 text-blue-400" />,
      format: "AIFF",
      description: "Alternative high-quality format"
    },
    {
      icon: <FileAudio className="h-6 w-6 text-blue-400" />,
      format: "24-bit",
      description: "Minimum bit depth required"
    },
    {
      icon: <FileAudio className="h-6 w-6 text-blue-400" />,
      format: "44.1kHz+",
      description: "Sample rate (higher is better)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Send Your Files
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to ensure your project gets the best possible treatment
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Step Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
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
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Accepted File Formats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fileFormats.map((format, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {format.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
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
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have your files ready? Send them our way and let's create something amazing together.
            </p>
            <a href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Send Your Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSendFiles;