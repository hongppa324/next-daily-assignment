import React from "react";
import type { RandomFact } from "@/types";

// ISR : fetch한 데이터가 일정 주기마다 갱신
const ISR = async () => {
  // fetch option => revalidate : 단위(초)
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const jsonData = await response.json();
  const fact: RandomFact = jsonData;

  return (
    <div className="flex justify-center">
      <p className="flex justify-center text-lg w-3/6">
        {fact.fact} [길이] : {fact.length}
      </p>
    </div>
  );
};

export default ISR;
