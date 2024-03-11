import React from "react";
import type { RandomFact } from "@/types";

// SSG : fetch한 데이터가 불변 => 아무것도 하지 않으면 SSG!
const SSG = async () => {
  // fetch에 아무 옵션도 부여하지 않거나 cache : "force-cache"
  const response = await fetch(`https://catfact.ninja/fact`);
  const jsonData = await response.json();
  const fact: RandomFact = jsonData;

  return (
    <div className="flex justify-center">
      <p className="flex justify-center text-lg w-3/6 ">
        {fact.fact} [길이] : {fact.length}
      </p>
    </div>
  );
};

export default SSG;
