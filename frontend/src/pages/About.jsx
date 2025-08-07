import React from 'react';
import { Award, Headphones, Music, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const stats = [
    {
      icon: <Music className="h-8 w-8 text-blue-400" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      number: "200+",
      label: "Happy Artists"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-400" />,
      number: "24/7",
      label: "Dedicated Service"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Hesseldahl Sound
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio engineering services that bring your musical vision to life
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
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

          {/* Philosophy Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
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

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Headphones className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Professional Mixing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Music className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Audio Mastering
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Quality Assurance
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
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to take your music to the next level? We're here to help bring your vision to life.
            </p>
            <a href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;