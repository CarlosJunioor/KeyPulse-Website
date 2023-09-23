import clsx from "clsx";

interface GamesCardProps {
  image: string;
  alt: string;
  logo?: string;
  className?: string;
}

export const GamesCard = ({ image, alt, logo, className }: GamesCardProps) => {
  return (
    <div
      className={clsx(
        "w-[272px] h-[620px] overflow-hidden flex justify-center drop-shadow-md cursor-pointer transition-all",
        className
      )}
    >
      <img src={logo} className="absolute drop-shadow-md w-44 top-4 z-10 " />
      <img
        src={image}
        alt={alt}
        className="hover:scale-105"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transition: "all 0.2s ease",
        }}
      />
    </div>
  );
};
