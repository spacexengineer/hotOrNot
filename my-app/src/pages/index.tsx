// @ts-nocheck
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [decision, setDecision] = useState<string | null>(null);
  const [hotties, setHotties] = useState<string[]>([]);
  const [notties, setNotties] = useState<string[]>([]);

  // Simulated hardcoded array of image links
  // const imageLinks: string[] = ["link1.jpg", "link2.jpg", "link3.jpg"]; // Replace with actual image URLs
  const imageLinks: string[] = [
    "https://people.com/thmb/PNUWeuDKvo6ym2Hopb_qr6R8mxs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(563x382:565x384)/scarlett-johansson-33882ce2f63c413c9f892636165781fb.jpg",

    "https://media1.popsugar-assets.com/files/thumbor/6QMGvlvK-wDAJAvKQfM_kdqTQfw=/0x125:1992x1171/fit-in/2000x2697/filters:format_auto():quality(85):upscale()/2022/11/08/729/n/1922283/2c206470636a841f07c3d6.62748379_.jpg",

    "https://www.instyle.com/thmb/A--XUf6HT4u5_-5XWeFaptfygkA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2016-chris-pine-739dd588ce0542ce8cf848380dc27569.jpg",
  ]; // Replace with actual image URLs

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomDecision = Math.random() > 0.5 ? "yes" : "no";
      setDecision(randomDecision);

      if (randomDecision === "yes") {
        setHotties((prevHotties) => [...prevHotties, imageLinks[imageIndex]]);
      } else {
        setNotties((prevNotties) => [...prevNotties, imageLinks[imageIndex]]);
      }

      // Move to the next image or loop back to the start
      setImageIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div>
      <h1>Hot or Not?!</h1>
      <img
        src={imageLinks[imageIndex]}
        // src={imageLinks[0]}
        alt="Random person"
        style={{ maxWidth: "100%", width: "50%" }}
      />
      {decision === "yes" ? <div>✔️</div> : <div>❌</div>}
      <Link href="/hotties">
        {/* <a>View Hotties</a> */}
        View Hotties
      </Link>
      <Link href="/notties">
        View Notties
        {/* <a>View Notties</a> */}
      </Link>
    </div>
  );
};

// const Home: React.FC = () => {
//   return <div>hello world</div>;
// };

export default Home;
