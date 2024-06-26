import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
              </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/men-banner.png" alt="Mineral en bruto" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/mushrooms">
            MUSHROOMS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/kid-banner.png" alt="Piezas Artesania" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/drmartens">
            DR.MARTENS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/women-banner.png" alt="Joyeria de plata" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/stateofmind">
            STATE OF MIND
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 15,
};
