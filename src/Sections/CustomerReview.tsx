import { reviews } from "@/constants";
import ReviewCard from "./Components/ReviewCard";

type Props = {};

const CustomerReview = (props: Props) => {
  return (
    <section className="max-container ">
      <h3 className="font-montserrat text-center text-4xl font-bold">
        What Our<span className="text-coral-red"> Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((e) => (
          <ReviewCard review={e} key={e.customerName} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
