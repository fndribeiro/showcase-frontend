import React from "react";
interface Props {
  header: string;
  body: string[];
}

export default function Card({ header, body }: Props) {
  return (
    <div>
      <div className="rounded shadow-lg bg-sky-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{header}</div>
          <ul className="text-gray-700 text-lg text-justify max-w-screen-md list-disc">
            {body.map((item, index) => (
              <li className="pb-3" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
