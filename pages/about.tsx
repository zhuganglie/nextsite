import React from 'react';
import Layout from '@/components/layout';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "about page"
};

const About = () => {
  return (
    <Layout>
      <main>
        <h2>About</h2>
      </main>
    </Layout>
  );
};

export default About;

