import { useState, useEffect } from "react";
import { PlayerCard } from "../components/PlayerCard";
import BlueBall from "../assets/images/BlueBall.svg";
import OrangeBall from "../assets/images/orangeBall.svg";
import DefaultPlayerImg from "../mocks/Players/playerExample.png";

interface Member {
  image: string;
  Name: string;
  NickName: string;
  PositionLabel: string;
  SocialMedia: string[];
}

export const Teams = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(
          "https://personal-e2jusrpr.outsystemscloud.com/KeyPulse_API/rest/keypulseget/GetMemberList?teamid=3",
          {
            headers: {
              "xclientsecret": "teste-keypulse"
            }
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data = await response.json();
        console.log("Response data:", data); // Log the response data

        if (data && Array.isArray(data.Members)) {
          setMembers(data.Members);
        } else {
          throw new Error("Invalid data format: Expected an object with a 'Members' array");
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  
  return (
    <main className="min-h-screen pt-40 relative">
      <div className="flex justify-center"></div>
      <div className="flex flex-wrap justify-center pt-20 gap-6 z-10">
        {members.map((member, index) => (
          <PlayerCard
            key={index}
            img={member.image || DefaultPlayerImg}
            name={member.Name || "Unknown"}
            nickName={member.NickName || "Unknown"}
            position={member.PositionLabel || "Coach"}
          />
        ))}
      </div>
      <img src={BlueBall} className="absolute right-0 bottom-0 -z-10" />
      <img src={OrangeBall} className="absolute -top-60 -left-72 -z-10" />
    </main>
  );
};
