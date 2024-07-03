import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container">
      <div>
        <h1>Services</h1>
        <div className="card">
          <Link href="/services/service-1">Service-1</Link>
        </div>
        <div className="card">
          <Link href="/services/service-2">Service-2</Link>
        </div>
        <div className="card">
          <Link href="/services/service-3">Service-3</Link>
        </div>
      </div>
    </div>
  );
}
