import React from 'react';

export default function Views({
  threeWords,
  image,
}: {
  threeWords: string;
  image: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Get Data</h1>
      <div className="flex items-center justify-center gap-4 ">
        <img src={image} alt="" />
        <p className="text-center">Words: {threeWords}</p>
      </div>
    </div>
  );
}
