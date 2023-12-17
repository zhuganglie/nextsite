import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "about page"
};

const About = () => {
  return (
      <article>
        <h2>About</h2>
      </article>
  );
};

export default About;

