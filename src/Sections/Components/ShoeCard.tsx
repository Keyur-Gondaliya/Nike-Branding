import { Shoe } from "@/constants/generals";
import React from "react";

type Props = {
  imgUrl: Shoe;
  changeBigShoeImage: (imageUrl: string) => void;
  bigShoeImg: string;
};

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }: Props) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={() => {
        if (bigShoeImg !== imgUrl.bigShoe) {
          changeBigShoeImage(imgUrl.bigShoe);
        }
      }}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.bigShoe}
          alt="Show Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
