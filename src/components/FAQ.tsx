import React, { useState } from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Dropdown = styled.div`
  margin: 10px;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-decoration: underline transparent 1px;
  transition: text-decoration 0.3s ease-in-out;
  &:hover {
    text-decoration: underline solid 1px;
  }
`;

const DropdownContent = styled.div`
  margin: 10px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;

  &.open {
    max-height: 500px; /* Adjust as needed */
  }
`;

const ArrowDown = styled.div`
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${THEME_COLORS.brandWhite};
`;

const ArrowUp = styled.div`
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${THEME_COLORS.brandWhite};
`;

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: underline transparent 1px;
  background-color: transparent;
  font-style: italic;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
`;

// types.ts
type Project = {
  title: string;
  skills: string;
  description: React.ReactNode;
};

const WikiViz: Project = {
  title: "WikiViz",
  skills: "Java, JSoup, JUNG",
  description: <div>
    Wrote an application that visualizes Wikipedia topics as an interactive graph using a depth-first recursive word-prevalence PageRank algorithm. <InlineLink href="https://www.youtube.com/watch?v=cmZ5-wvgRYY" target="_blank">Check out this demo video!</InlineLink>
  </div>
}

const FakeGoogle: Project = {
  title: "Webserver Search Engine",
  skills: "C, C++, HTTP, TCP/IP, POSIX, Unix/Linux, DNS protocols",
  description: <div>
    Built a complete webserver using C and C++ that serves a webpage interface, accepts client search requests, finds relevant documents and webpages in its index, then serves a response over the internet. Wrote a tool to scan files into the server index.
  </div>
}

const SciFact: Project = {
  title: "SciFact LLM",
  skills: "Python, PyTorch, Google Colab, HuggingFace",
  description: <div>
    Experimented with several large langauge model strategies for the OpenBookQA benchmark. Built and fine-tuned a RAG fact-retrieval model that achieved near-human 85% accuracy on the dataset despite limited compute. <InlineLink href="https://github.com/asn1814/Fact-Retrieval-and-Ensemble-Models-on-OpenBookQA/blob/main/CSE447_Final_Project_Report___Yeung__Nakamoto.pdf" target="_blank">Check out our paper!</InlineLink>
  </div>
}

const CampusPaths: Project = {
  title: "Campus Paths",
  skills: "Java, Typescript, JSON, GSON, React, HTML",
  description: <div>
    Built a webpage using React that implements Dijkstra’s algorithm to find the shortest path between locations on campus. Computation is run serverside and GSON is used to send the path to the webpage.
  </div>
}

const Hydrone: Project = {
  title: "Hydrone for Oculus VR",
  skills: "C#, Unity, Oculus, Blender",
  description: <div>
    Programmed and modeled an interactive VR demonstration of a floating hydroponics garden for the Oculus Headset in C# for a client proposal. Implemented haptic feedback and full range of view for controllers and headset.
  </div>
}

const DropdownItem: React.FC<{ info: Project }> = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <div><b>{info.title}</b> - {info.skills}</div>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </DropdownHeader>
      <DropdownContent className={isOpen ? 'open' : ''}>
        {info.description}
      </DropdownContent>
    </Dropdown>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="fade12">
      <DropdownItem info={WikiViz} />
      <DropdownItem info={FakeGoogle} />
      <DropdownItem info={SciFact} />
      <DropdownItem info={CampusPaths} />
      <DropdownItem info={Hydrone} />
    </div>
  );
}

export default FAQ;