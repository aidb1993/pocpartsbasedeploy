"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Testimonials = ({ comment, client, role, icon, company }) => {
  // Correctly format the icon name to match your filenames
  const formattedIconName = icon.toLowerCase().replace(/\s+/g, "-");

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
        <p className="text-2xl font-bold text-primary-500">{comment}</p>
      </div>
      <p className="text-dark300_light700 mb-4 text-lg">{comment}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-dark300_light700 font-bold">{client}</p>
          <p className="text-dark300_light700 text-sm">{role}</p>
        </div>
        <Image
          src={`/assets/icons/${formattedIconName}.svg`}
          alt={company}
          className="h-12"
          width="161"
          height="24"
        />
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const sessionId = uuidv4();
        const response = await axios.get(
          `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`
        );
        const data = response.data;
        setSelectedTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-16">
      <h2 className="text-dark300_light700 mb-12 text-center text-4xl font-bold">
        Hear what PartsBase customers are saying
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {selectedTestimonials.map((testimonial, index) => (
          <Testimonials key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
