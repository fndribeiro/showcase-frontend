import Link from "next/link";
import React from "react";
interface Props {
  header: string;
  body: string[];
  cardClassName: string;
  listClassName: string;
  withDisc?: boolean;
  withLink?: boolean
  linkHref?: string
}

export default function Card(props: Props) {

  const listDisc = props.withDisc ? "list-disc" : "";

  return (
    <div className={props.cardClassName}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.header}</div>
        <ul className={`text-gray-700 text-lg text-justify max-w-screen-md ${listDisc}`}>
          {props.body.map((item, index) => (
            <li className={props.listClassName} key={index}>
              {item}
            </li>
          ))}
          {props.withLink && (
            <li className="pt-4">
              <Link href={props.linkHref || ''} target="_blank" className="text-black font-bold">
                Github
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
