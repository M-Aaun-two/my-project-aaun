import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";

const Sevices = () => {
  return (
    <section className="max-container flex justify-center flex-wrap   
 gap-4 md:gap-9"> {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Sevices;