export interface CadidateBox{
    id:number,
    nama:string,
    photo:string,
    nomorUrut:number,
    angkatan:number
}

export const candidates:CadidateBox[] = [
    {
        id:1,
        nama:"Fadly Ariansyah",
        photo:"/2.webp",
        nomorUrut:1,
        angkatan: 21,
    },
    {
        id:2,
        nama:"Arya Segara",
        photo:"/1.webp",
        nomorUrut:2,
        angkatan: 21,
    },
]