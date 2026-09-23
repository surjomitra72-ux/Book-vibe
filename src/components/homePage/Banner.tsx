
import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 md:p-10 lg:p-14 shadow-xl overflow-hidden">

          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📚 Explore Our Collection
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to freshen up{" "}
              <span className="text-green-600">
                your bookshelf
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Discover inspiring stories, timeless classics, and exciting new
              books that deserve a place on your bookshelf.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-green-700 hover:-translate-y-1">
                View the Task
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-green-500 hover:text-green-600">
                Explore Books
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={bannerImg}
                alt="Books banner"
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-sm text-slate-500">Discover</p>
              <p className="font-bold text-slate-900">Your Next Read 📖</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
