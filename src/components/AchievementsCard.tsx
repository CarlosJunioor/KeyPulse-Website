interface AchivementsProps {
  position: number;
  championship: string;
}

export const AchievementsCard = ({
  position,
  championship,
}: AchivementsProps) => {
  return (
    <div className="flex gap-6 items-center bg-neutral-800 rounded p-4">
      <h1 className="pl-4 text-5xl text-orange-primary font-bold">
        {position}º
      </h1>
      <p className="text-2xl font-semibold whitespace-pre-wrap text-start">
        Lugar na {championship}
      </p>
    </div>
  );
};
