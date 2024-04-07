// @ts-nocheck
import React from "react";
import Link from "next/link";

export default function Hotties({ hotties }) {
  if (!hotties) {
    // Handle the case where 'hotties' is undefined
    return <div>No hotties found.</div>;
  }

  return (
    <div>
      <h1>List of Hot People</h1>
      <ul>
        {hotties.map((image, index) => (
          <li key={index}>
            <img
              src={image}
              alt={`Hot person ${index}`}
              style={{ maxWidth: "100%" }}
            />
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Back to Voting</a>
      </Link>
    </div>
  );
}
