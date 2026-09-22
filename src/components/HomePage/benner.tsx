import React from "react";
import Image from "next/image";
import benarlogo from "@/assets/hero_img.jpg";
const BennerPage = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className="flex justify-between items-center px-9 bg-gray-200 py-20 rounded">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h2>
          <button className="btn btn-success">View The List</button>
        </div>
        <div>
    <div>
  <Image
    src={benarlogo}
    alt="banner logo"
    width={500}
    height={500}
    priority
    className="w-full h-auto rounded-xl"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default BennerPage;
