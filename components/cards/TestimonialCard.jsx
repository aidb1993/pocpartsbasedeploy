"use client";
import React, { useState, useEffect } from "react";
import { testimonials } from "@/constants";
import Image from "next/image";

const TestimonialCard = ({ quote, author, role, companyLogo, companyName }) => {
  return (
    <div className="background-light800_dark300 rounded-[10px] bg-light-blue-background p-6 shadow-lg">
      <div className="mb-4 flex items-start">
        <Image
          src="/assets/icons/quote.svg"
          alt="Quote icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <p className="text-2xl font-bold text-primary-500">{quote}</p>
      </div>
      <p className="text-dark300_light700 mb-4 text-lg">{quote}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-dark300_light700 font-bold">{author}</p>
          <p className="text-dark300_light700 text-sm">{role}</p>
        </div>
        <Image
          src={companyLogo}
          alt={companyName}
          className="h-12"
          width="161"
          height="24"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);

  useEffect(() => {
    const getRandomTestimonials = (array, num) => {
      const shuffled = [...array].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    const randomTestimonials = getRandomTestimonials(testimonials, 2);
    setSelectedTestimonials(randomTestimonials);
  }, []);

  return (
    <div className="py-16">
      <h2 className="text-dark300_light700 mb-12 text-center text-4xl font-bold">
        Hear what PartsBase customers are saying
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {selectedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
