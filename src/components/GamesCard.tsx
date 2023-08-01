interface GamesCardProps {
  image: string;
  alt: string;
}

export const GamesCard = ({ image, alt }: GamesCardProps) => {
  return (
    <div className="w-56 rounded-md h-80 overflow-hidden flex drop-shadow-md cursor-pointer hover:scale-105 transition-all">
      <img src={image} alt={alt} object-fit="cover" />
    </div>
  );
};
