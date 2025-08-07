import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace with your actual service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hello@hesseldahlsound.com'
      };

      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      content: "hello@hesseldahlsound.com",
      description: "Send us an email anytime"
    },
    {
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly"
    },
    {
      title: "Free Consultation",
      content: "Available",
      description: "Discuss your project with us"
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
              GET IN TOUCH
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you and discuss how we can help bring your music to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl text-white flex items-center gap-2 tracking-wide">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  SEND US A MESSAGE
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block font-medium tracking-wide">
                        YOUR NAME *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-cyan-300" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-gray-800/30 border-cyan-300/20 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300/20"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block font-medium tracking-wide">
                        EMAIL ADDRESS *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-cyan-300" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 bg-gray-800/30 border-cyan-300/20 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300/20"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block font-medium tracking-wide">
                      SUBJECT *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gray-800/30 border-cyan-300/20 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300/20"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block font-medium tracking-wide">
                      MESSAGE *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-gray-800/30 border-cyan-300/20 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300/20 resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-900 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-300/25 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-gray-900/30 border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-cyan-300 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Information */}
            <Card className="bg-gray-900/30 border-cyan-300/20 backdrop-blur-sm group hover:border-cyan-300/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/5 via-cyan-500/5 to-cyan-300/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <CardContent className="relative p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 tracking-wide">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  WHAT TO INCLUDE
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Project details and timeline</li>
                  <li>• Genre and style preferences</li>
                  <li>• Reference tracks (if any)</li>
                  <li>• Budget and service requirements</li>
                  <li>• File sharing link (if ready)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;