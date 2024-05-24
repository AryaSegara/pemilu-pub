import React from "react";
import CandidateBox from "./components/CandidateBox";
import { candidates } from "./data/Candidates";

const App: React.FC = () => {
  return (
    <>
      <header className="w-auto flex items-center p-2 bg-orange-200">
        <span className="flex text-3xl gap-2">
          <span className="text-black pl-4">PEMILU</span>
          <span className="text-3xl font-bold text-blue-400">PUB</span>
        </span>
      </header>
      <main className="flex flex-col p-3 gap-2 h-screen bg-gray-300">
        <h1 className="text-center text-4xl font-bold">Kandidat Pemilu PUB</h1>
        <h1 className="text-center text-2xl">Calon Ketua Dan Keamanan</h1>
        <div className="grid gap-3 sm:flex">
          {candidates.map((candidate) => (
            <CandidateBox key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </main>
      <footer className="p-3 bg-orange-300">
        <div className="text-3xl text-center text-white">
          &copy;PUB
        </div>
      </footer>
    </>
  );
};

export default App;
