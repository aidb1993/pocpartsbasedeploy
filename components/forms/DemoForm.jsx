"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DemoFormSchema } from "@/lib/validations";

const DemoForm = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(DemoFormSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phoneNumber: "",
      industryClass: "Airline",
    },
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        console.log("Form Data:", values);
        // Handle form submission, e.g., send data to an API
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="background-light900_dark300 text-dark400_light700 flex flex-col gap-4 rounded-none bg-[#F5F9FE] p-6 shadow-none md:p-8 xl:p-10 xxl:h-auto xxl:w-full xxl:rounded-custom-37 xxl:px-[10%] xxl:py-[50px] xxl:shadow-custom"
      >
        <h3 className="justify-center text-center text-2xl font-bold text-primary-500 md:text-3xl xl:text-4xl">
          Book Your Demo Today!
        </h3>
        <p className="hidden text-center xxl:block">
          Gain access to a free 14 day trial. No credit card needed!
        </p>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Full Name*</FormLabel>
              <FormControl className="background-light900_dark300">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Company*</FormLabel>
              <FormControl className="background-light900_dark300">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Email*</FormLabel>
              <FormControl className="background-light900_dark300">
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Phone Number*</FormLabel>
              <FormControl className="background-light900_dark300">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industryClass"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Select Industry Class*</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-4">
                  {["Airline", "MRO", "US Defense Contractor", "Other"].map(
                    (option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={field.value === option}
                          onChange={field.onChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-6 text-center">
          <Button className="btn-tertiary flex h-[56px] w-full cursor-pointer items-center justify-center rounded-[4px] px-4 py-3 text-center text-[22px] font-medium leading-[30px] !text-light-900 shadow-none">
            <span className="block">
              {isSubmitting ? "Submitting..." : "Book a Demo"}
            </span>
          </Button>
        </div>

        <p className="mt-4 text-center text-sm">
          We value your privacy and do not share your info with third-parties.
        </p>
      </form>
    </Form>
  );
};

export default DemoForm;
