import React from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [selectedTopic, setselectedTopic] = useState("");
  const handleSelect = (selectedItem) => {
    setselectedTopic(selectedItem);
    console.log(selectedTopic);
  };
  let tabContent = <p>Please select a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples" className="">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
};

export default Examples;
