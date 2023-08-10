interface GamesCardProps {
  image: string;
  alt: string;
  logo?: string;
}

export const GamesCard = ({ image, alt, logo }: GamesCardProps) => {
  return (
    <div className="w-[272px] h-[620px] overflow-hidden flex justify-center drop-shadow-md cursor-pointer transition-all">
      <img src={logo} className="absolute drop-shadow-md w-44 top-4 z-10" />
      <img
        src={image}
        alt={alt}
        className="hover:scale-105 transition-all"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
};
