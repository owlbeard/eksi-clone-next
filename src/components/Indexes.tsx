import React from 'react';

type IndexesProps = {
  width: number;
};

export default function Indexes({ width }: IndexesProps) {
  return (
    <div className={`fixed top-32 ${width >= 1280 ? 'w-60' : 'w-48'}`}>
      Indexes
    </div>
  );
}
