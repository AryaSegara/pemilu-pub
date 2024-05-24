/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { CadidateBox } from "../data/Candidates"

interface CandidateBoxPemilu{
    candidate:CadidateBox;
}

const CandidateBox : React.FC <CandidateBoxPemilu> = ({candidate}) => {
    return(
        <div className="m-auto border-4 border-white rounded-3xl p-6 mt-10">
            <span className="border border-white text-2xl rounded-full absolute w-10 text-center font-bold">{`0${candidate.nomorUrut}`}</span>
            <img className="rounded-full" src={candidate.photo} style={{width:"250px", height:"250px"}} alt={candidate.nama} />
            <h2 className="text-left text-2xl pt-5 font-bold">{candidate.nama}</h2>
            <h2 className="text-lef text-1xl pb-4 font-bold">Angkatan : {candidate.angkatan}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Selengkapnya</button>
        </div>
    )
}

export default CandidateBox;



