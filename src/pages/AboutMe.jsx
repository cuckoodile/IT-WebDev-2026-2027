import React from "react";
import me from "../assets/mee.png";

export default function AboutMe() {
  return (
    <section className="flex justify-center items-center gap-8">
      <img src={me} alt="Ian Sube" className="h-90 w-95 rounded-full border" />

      <section className="w-[40%] flex flex-col gap-7">
        <div>
          <h1 className="text-5xl font-bold">Lhourde Ian Ros Sube</h1>
          <p className="italic">"If life gives you lemon. Punch it in the throat."</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            Hi! I'm an instruction at MFI Polytechnic Institute INC. and I teach
            programming related subjects such Python Fundamentals, Website
            Development, and Java.
          </p>
          <p>
            Aside from my current profession, I also love to play games, eat,
            sleep, study, and above all, I love spending time with my wife and
            son at home.
          </p>
        </div>
      </section>
    </section>
  );
}
