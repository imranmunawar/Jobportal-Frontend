import React, { useState } from 'react';
import Hero from '../components/Hero';
import JobList from '../components/JobList';
import Features from '../components/Features';
import Stats from '../components/Stats';

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (keyword: string, location: string) => {
    setSearchKeyword(keyword);
    setSearchLocation(location);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <JobList keyword={searchKeyword} location={searchLocation} />
      </div>
      <Features />
      <Stats />
    </>
  );
}