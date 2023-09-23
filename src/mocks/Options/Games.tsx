export interface IGames {
  id: number;
  name: string;
  logo: string;
}

export const Games: IGames[] = [
  { id: 1, name: "Valorant", logo: "/public/images/valorant.webp" },
  {
    id: 2,
    name: "League of Legends",
    logo: "/public/images/League-of-legends.png",
  },
  { id: 3, name: "Wild Rift", logo: "/public/images/wild-rift.png" },
];
