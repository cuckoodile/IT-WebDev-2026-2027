import React from "react";
import { useParams } from "react-router";

import games from "../assets/games.webp";
import family from "../assets/family.webp";
import study from "../assets/study.webp";

export default function Hobby() {
  const { id } = useParams();

  const hobbies = [
    {
      id: 1,
      img: games,
      name: "Games",
      description:
        "The games I play varies a lot from MOBA, Farming, Simulations, and more.",
      reason:
        "Playing help me relax and cheer myself up from stress, fatigues, and more.",
    },
    {
      id: 2,
      img: family,
      name: "Family Bonding",
      description:
        "The act of spending time with your family or love ones to further strengthen your bonds, trust, and knowledge of one another.",
      reason:
        "My family is the very reason I work hard and continuously strive to improve myself. They are something I can't afford to lose because losing them would make my life feel meaningless, leaving me without a clear purpose or goal in life.",
    },
    {
      id: 3,
      img: study,
      name: "Studying",
      description:
        "The act of doing research, experimenting, and doing things to learn and improve one's knowledge.",
      reason:
        "I love studying because it make me feel like i am becoming a better person day by day. Studying is also my way of providing my family because the more knowledge I gain, the more capability I would have, and the more capable I am, the more opportunities I would get.",
    },
  ];

  return (
    <section className="flex-1 flex p-5">
      {hobbies.map((item) => {
        if (item.id == id) {
          return (
            <section className="flex-1 flex flex-col gap-5 items-center">
              <img
                src={item.img}
                alt=""
                className="h-70 rounded-lg border hover:scale-110 duration-300"
              />
              <p className="font-bold text-3xl">{item.name}</p>
              <p className="text-center">{item.description}</p>
              <p className="text-center">{item.reason}</p>
            </section>
          );
        }
      })}
    </section>
  );
}
