// @ts-nocheck
import React from "react";
import Link from "next/link";

export default function Notties({ notties }) {
  if (!notties) {
    // Handle the case where 'notties' is undefined
    return <div>No notties found.</div>;
  }

  return (
    <div>
      <h1>List of Not Hot People</h1>
      <ul>
        {notties.map((image, index) => (
          <li key={index}>
            <img
              src={image}
              alt={`Not hot person ${index}`}
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
