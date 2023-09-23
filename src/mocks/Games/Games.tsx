export interface IGames {
  id: number;
  name: string;
  logo: string;
  banner: string;
}

export const Games: IGames[] = [
  {
    id: 1,
    name: "Valorant",
    logo: "/images/valorant.png",
    banner: "/images/banner-valorant.jpg",
  },
  {
    id: 2,
    name: "League of Legends",
    logo: "/images/League-of-legends.png",
    banner: "/images/banner-league-of-legends.jpg",
  },
  {
    id: 3,
    name: "Wild Rift",
    logo: "/images/wild-rift.png",
    banner: "/images/banner-wild-rift.png",
  },
];
