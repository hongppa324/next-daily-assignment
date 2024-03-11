"use client";

import React, { useEffect, useState } from "react";
import type { RandomFact } from "@/types";

// CSR : fetch한 데이터가 컴포넌트의요청이 있을 때마다 실시간으로 계속 변경됨.
// "use client"
// build-time에 컴포넌트를 생성하지 않고, 리액트 파일을 다운로드 받으면 화면이 렌더링됨.
const CSR = () => {
  const [fact, setFact] = useState<RandomFact | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const results = await response.json();
      setFact(results);
    };

    fetchData();
  }, []);

  if (!fact) {
    return <div className="flex justify-center text-lg">로딩중...</div>;
  }

  return (
    <div className="flex justify-center">
      <p className="flex justify-center text-lg w-3/6 justify-center">
        {fact.fact} [길이] : {fact.length}
      </p>
    </div>
  );
};

export default CSR;
