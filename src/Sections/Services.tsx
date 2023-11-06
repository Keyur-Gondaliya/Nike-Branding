import { services } from "@/constants";
import ServiceCard from "./Components/ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((e) => (
        <ServiceCard service={e} key={e.label} />
      ))}
    </section>
  );
};

export default Services;
