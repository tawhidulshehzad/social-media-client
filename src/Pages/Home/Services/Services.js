import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("https://cloud-food-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center">
      <div>
        <p className="text-center fs-3 fw-bold">Our Delicious Foods </p>
        <p>
          Delivery deals are best here. Observe Postmates. Grubhub/Seamless.
          ideal for simple payment.
        </p>
      </div>
      <div className="row">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link className="btn btn-primary my-3" to="/allservices">
        See All Services
      </Link>
    </div>
  );
};

export default Services;
