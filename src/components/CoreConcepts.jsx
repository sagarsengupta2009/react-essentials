import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return <CoreConcept key={item.title} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default CoreConcepts;
