interface SponsorsCardProps {
  image: string;
  alt: string;
  logo?: string;
}

export const SponsorsCard = ({ image, alt }: SponsorsCardProps) => {
  return (
    <div className="w-48 h-80 overflow-hidden flex justify-center drop-shadow-md cursor-pointer hover:scale-105 transition-all">
      <img src={image} alt={alt} />
    </div>
  );
};
