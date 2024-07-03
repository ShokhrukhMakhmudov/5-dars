import React from "react";

export async function generateStaticParams() {
  const services = ["service-1", "service-2", "service-3"];
  return services.map((item) => ({
    slug: item,
  }));
}
export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="container">
      <section className="flex items-center justify-center">
        <div className="card">
          <h1>{params.slug}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque
            cupiditate impedit earum excepturi accusamus praesentium, placeat
            error fugiat minima.
          </p>
        </div>
      </section>
    </div>
  );
}
