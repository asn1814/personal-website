import React, { useState } from 'react';
import styled from 'styled-components';
import { THEME_COLORS, InlineLink } from '../utils/theme.ts';

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

// types.ts
type Project = {
  title: string;
  skills: string;
  description: React.ReactNode;
};

const Fairseq2: Project = {
  title: "fairseq2 at Meta FAIR",
  skills: "Python, PyTorch, C++",
  description:<div>
    Implemented configurable functionality to use the latest preference optimization methods (DPO, SimPO, CPO, ORPO, etc.) for LLM alignment in Meta's popular open-source <InlineLink href="https://github.com/facebookresearch/fairseq2" target="_blank">fairseq2</InlineLink> toolkit using Python and PyTorch. fairseq2 is a sequence modeling toolkit that allows researchers and developers to train custom models for translation, summarization, language modeling, and other content generation tasks.
  </div>
}

const ChessBot: Project = {
  title: "Quiescence Search for Chess",
  skills: "Python",
  description:<div>
    Built a basic chess bot with minimax and alpha-beta pruning and memoized game states. Tested several variations of Don Beal's Generalized Quiescence Search algorithm, resulting in 3x runtime speedup while searching 5 plies deeper. Paper and code available <InlineLink href="https://github.com/asn1814/chessbot573/blob/main/CSE573_QuiescenceSearchForChess_Nakamoto.pdf" target="_blank">here</InlineLink>.
  </div>
}

const HealthyBrain: Project = {
  title: "HealthyBrain (Hackathon Winner)",
  skills: "React, Vite, Javascript, Ollama",
  description:<div>
    Won 3rd place overall at DubHacks Next's 8VC 4-hour hackathon. Drawing intelligently from your personal calendar (Google Calendar, Apple Calendar, etc.), HealthyBrain is a AI diary application that intelligently asks about your day to minimize bookkeeping and maximize reflection. It uses on-device Llama for privacy and has automated mental health guardrails. Check out our <InlineLink href="https://www.loom.com/share/f64d902231b042ab82fa04e76c24ea16" target="_blank">demo video</InlineLink> or our <InlineLink href="https://github.com/randofan/healthybrain" target="_blank">code</InlineLink>.
  </div>
}

const WikiViz: Project = {
  title: "WikiViz",
  skills: "Java, JSoup, JUNG",
  description: <div>
    Wrote an application that visualizes Wikipedia topics as an interactive graph using a depth-first recursive word-prevalence PageRank algorithm. <InlineLink href="https://www.youtube.com/watch?v=cmZ5-wvgRYY" target="_blank">Check out this demo video!</InlineLink>
  </div>
}

const FakeGoogle: Project = {
  title: "File Search Engine",
  skills: "C, C++, HTTP, TCP/IP, POSIX, Unix/Linux, DNS",
  description: <div>
    Built a complete webserver using C and C++ that serves a webpage interface, accepts client search requests, finds relevant documents and webpages in its index, then serves a response. Includes a tool to scan files into the server index.
  </div>
}

const SciFact: Project = {
  title: "SciFact LLM",
  skills: "Python, PyTorch, Google Colab, HuggingFace",
  description: <div>
    Experimented with several large language model strategies for the OpenBookQA benchmark. Built and fine-tuned a RAG fact-retrieval model that achieved near-human 85% accuracy on the dataset despite limited compute. <InlineLink href="https://github.com/asn1814/Fact-Retrieval-and-Ensemble-Models-on-OpenBookQA/blob/main/CSE447_Final_Project_Report___Yeung__Nakamoto.pdf" target="_blank">Check out our paper!</InlineLink>
  </div>
}

const CampusPaths: Project = {
  title: "Campus Paths",
  skills: "Java, Typescript, JSON, GSON, React, HTML",
  description: <div>
    Built a webpage using React that implements Dijkstra&#39;s algorithm to find the shortest path between locations on UW&#39;s campus. Computation is run on a Java server and returned with GSON.
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
    <div className="fade08">
      <DropdownItem info={Fairseq2} />
      <DropdownItem info={HealthyBrain} />
      <DropdownItem info={WikiViz} />
      <DropdownItem info={ChessBot} />
      <DropdownItem info={FakeGoogle} />
      <DropdownItem info={SciFact} />
      <DropdownItem info={CampusPaths} />
      <DropdownItem info={Hydrone} />
    </div>
  );
}

export default FAQ;