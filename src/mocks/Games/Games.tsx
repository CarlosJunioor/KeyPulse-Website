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
    logo: "/public/images/valorant.png",
    banner: "/public/images/banner-valorant.jpg",
  },
  {
    id: 2,
    name: "League of Legends",
    logo: "/public/images/League-of-legends.png",
    banner: "/public/images/banner-league-of-legends.jpg",
  },
  {
    id: 3,
    name: "Wild Rift",
    logo: "/public/images/wild-rift.png",
    banner: "/public/images/banner-wild-rift.png",
  },
];
