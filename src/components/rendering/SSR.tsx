// src>components>rendering>SSR.tsx
import React from "react";
import type { RandomFact } from "@/types";

// SSR : fetch한 데이터가 컴포넌트의 요청이 있을 때마다 실시간으로 계속 변경됨.
// build-time에 컴포넌트를 초기 생성함
const SSR = async () => {
  // fetch option => cache : "no-cache"
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
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

export default SSR;
