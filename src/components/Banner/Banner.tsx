import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

import { client } from "@/lib/prismicio";
import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client"; // Potrzebne do isFilled
import type { BannerType } from "@/types/types";
import { BannerDocument } from "../../../prismicio-types";

export const Banner = async () => {
  // Pobierz pojedynczy dokument po API ID
  const bannerResponse = await client.getSingle<BannerDocument>("banner");
  const data = bannerResponse.data;

  // jexli nieaktywny albo brakuje kluczowych cen- nie renderuj
  if (
    !data.is_active ||
    !prismic.isFilled.number(data.old_price) ||
    !prismic.isFilled.number(data.new_price)
  ) {
    return null;
  }

  const bannerData: BannerType = {
    // Title: KeyTextField -> string
    title: prismic.isFilled.keyText(data.banner_title)
      ? data.banner_title
      : "Wyjątkowa Promocja!",

    // Content: RichTextField -> RichTextField
    banner_content: data.banner_content,
    //jest wypełniony bo juz walidowalem ifem
    old_price: data.old_price!,

    // new Price: NumberField -> number
    new_price: data.new_price!,

    // Image: ImageField -> string url
    promo_image: prismic.isFilled.image(data.promo_image)
      ? data.promo_image.url!
      : "/pizza.png",

    // Color: ColorField -> string
    color: prismic.isFilled.color(data.color) ? data.color! : "#fff",
  };

  const { title, old_price, new_price, promo_image, color } = bannerData;
  return (
    <section
      className={`h-[400px] max-w-7xl text-center  mx-auto rounded-xl p-4 m-2 shadow-xl shadow-[var(--error)] flex flex-col justify-around items-center`}
      style={{ backgroundColor: color }}
    >
      <span className="font-bold font-display text-[var(----medium)] text-xl">
        {title}
      </span>

      <div>
        <FontAwesomeIcon
          icon={faPercent}
          className="text-4xl text-[var(--success)]"
        />
        <FontAwesomeIcon
          icon={faPercent}
          className="text-4xl text-white"
        />
        <FontAwesomeIcon
          icon={faPercent}
          className="text-4xl text-[var(--error)]"
        />
      </div>

      <div>
        <Image
          src={promo_image} // prismic
          alt={title}
          width={300}
          height={100}
          className=""
        />

        <span className=" font-bold">
          <PrismicRichText field={bannerData.banner_content} />
        </span>
      </div>

      <p className="flex items-baseline gap-2 font-bold text-lg md:text-xl">
        <span className="relative text-[var(--medium)] text-base line-through">
          {old_price.toFixed(2)} $
        </span>

        <span className="text-red-600 text-2xl animate-bounce ">
          {new_price.toFixed(2)} $
        </span>
      </p>
    </section>
  );
};
