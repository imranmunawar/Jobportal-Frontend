import React from 'react';

export default function Stats() {
  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "50K+", label: "Companies" },
    { number: "100K+", label: "Jobs Posted" },
    { number: "90+", label: "Countries" }
  ];

  return (
    <div className="bg-green-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-green-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}