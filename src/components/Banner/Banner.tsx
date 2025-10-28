import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import { client } from "@/lib/prismicio";
import { PrismicRichText } from "@prismicio/react";

export const Banner = async () => {
  // Pobierz pojedynczy dokument po API ID
  const bannerResponse = await client.getSingle("banner");
  const data = bannerResponse.data as any;

  // jexli nieaktywny albo brakuje kluczowych cen- nie renderuj
  if (!data.is_active || data.old_price === null || data.new_price === null) {
    return null;
  }

  const title = data.banner_title;
  const oldPrice = data.old_price as number;
  const newPrice = data.new_price as number;
  const promoImage = data.promo_image?.url || "/pizza.png";

  return (
    <section className="h-[400px] max-w-7xl text-center bg-orange-200 mx-auto rounded-xl p-4 shadow-xl shadow-[var(--error)] flex flex-col justify-around items-center">
      <span className="font-bold font-display text-[var(----medium)] text-xl">
        {title}
      </span>

      <div>
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-[var(--success)]"
        />
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-white"
        />
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-[var(--error)]"
        />
      </div>

      <div>
        <Image
          src={promoImage} // prismic
          alt={title}
          width={300}
          height={100}
          className=""
        />

        {/* DYNAMICZNY OPIS PROMOCJI (Rich Text) */}
        <span className="text-sm font-semibold">
          {/* Renderowanie  Rich Text z Prismic */}
          <PrismicRichText field={data.banner_content} />
        </span>
      </div>

      <p className="flex items-baseline gap-2 font-bold text-lg md:text-xl">
        <span
          className="
                    relative 
                    text-gray-400 
                    line-through 
                    text-base 
                    font-normal
                "
        >
          {oldPrice.toFixed(2)} $
        </span>

        <span className="text-red-600 text-2xl animate-bounce ">
          {newPrice.toFixed(2)} $
        </span>
      </p>
    </section>
  );
};
