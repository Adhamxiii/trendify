const brands = [
  {
    name: "Adidas",
    logo: "/brands/1.png",
  },
  {
    name: "Boss",
    logo: "/brands/2.png",
  },
  {
    name: "Calvin Klein",
    logo: "/brands/3.png",
  },
  {
    name: "Lacoste",
    logo: "/brands/4.png",
  },
  {
    name: "Puma",
    logo: "/brands/5.png",
  },
  {
    name: "RayBan",
    logo: "/brands/6.png",
  },
  {
    name: "Rolex",
    logo: "/brands/7.png",
  },
  {
    name: "Versace",
    logo: "/brands/8.png",
  },
  {
    name: "Zara",
    logo: "/brands/9.png",
  },
  {
    name: "New Balance",
    logo: "/brands/10.png",
  },
  {
    name: "Reebok",
    logo: "/brands/11.png",
  },
  {
    name: "Avengers",
    logo: "/brands/12.png",
  },
];

import Image from "next/image";

const BrandLogo = ({ name, logo }) => (
  <div className="group flex-shrink-0 px-8 py-4 grayscale hover:grayscale-0 transition-all duration-300">
    <Image
      src={logo}
      alt={`${name} logo`}
      width={200}
      height={100}
      className="h-12 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
    />
  </div>
);

const Brands = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Featured Brands
          </h2>
          <p className="mt-2 text-gray-500">
            Discover products from world-class brands
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...brands, ...brands].map((brand, idx) => (
                <BrandLogo key={`${brand.name}-1-${idx}`} {...brand} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden mt-4">
            <div className="flex animate-marquee-reverse">
              {[...brands.reverse(), ...brands].map((brand, idx) => (
                <BrandLogo key={`${brand.name}-2-${idx}`} {...brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
