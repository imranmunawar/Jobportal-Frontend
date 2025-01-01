import React from 'react';
import { Globe2, Users, Building, Briefcase, Award, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Access job opportunities from companies worldwide"
    },
    {
      icon: Users,
      title: "Multilingual Support",
      description: "Browse and apply in your preferred language"
    },
    {
      icon: Building,
      title: "Top Companies",
      description: "Connect with leading employers across industries"
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Find roles that match your career aspirations"
    },
    {
      icon: Award,
      title: "Verified Jobs",
      description: "All postings are verified for authenticity"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications for relevant opportunities"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose GlobalCareer?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering your career journey with powerful features and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-block p-3 bg-green-100 rounded-lg">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}