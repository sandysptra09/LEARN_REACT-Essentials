import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
  // menggunakan useState
  const [selectedTopic, setSelectedTopic] = useState();

  // menambahkan function eventListener
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  // menggunakan varibale if
  let tabContent = <p>Please select a topic.</p>;

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
    /* Components composition (children props) */
    <section title="Examples" id="examples">
      {/* slots */}
      <Tabs
        //   menggunakan string karena ingin mencetak "menu" bawaan
        ButtonsContainer="menu"
        buttons={
          <>
            {/* addEventListener  */}
            {/* dynamic styling */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* dynamic content menggunakan useState */}
      {/* {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

      {/* Bisa juga mengguanakan operator && */}
      {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )} */}
    </section>
  );
}
