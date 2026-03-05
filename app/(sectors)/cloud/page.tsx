'use client';

import React,{useEffect,useState} from "react";
import * as Icons from "lucide-react";

export default function CloudPage(){

const [files,setFiles] = useState<string[]>([]);
const [folder,setFolder] = useState("");
const [path,setPath] = useState<string[]>([]);
const [search,setSearch] = useState("");

const currentFolder = path.join("/");

const loadFiles = async()=>{

const res = await fetch(`/api/cloud/list?folder=${currentFolder}`);
const data = await res.json();

setFiles(data.files || []);

};

useEffect(()=>{loadFiles()},[currentFolder]);

const uploadFile = async(file:File)=>{

const form = new FormData();
form.append("file",file);
form.append("folder",currentFolder);

await fetch("/api/cloud/upload",{method:"POST",body:form});

loadFiles();

};

const createFolder = async()=>{

if(!folder) return;

await fetch("/api/cloud/folders",{
method:"POST",
body:JSON.stringify({folder:`${currentFolder}/${folder}`})
});

setFolder("");

loadFiles();

};

const enterFolder=(name:string)=>{

setPath([...path,name]);

};

const goBack=(index:number)=>{

setPath(path.slice(0,index+1));

};

const preview=(file:string)=>{

const url=`/uploads/${currentFolder}/${file}`;

if(file.match(/\.(jpg|jpeg|png|webp|gif)$/i)){
return <img src={url} style={{maxWidth:"80px"}}/>;
}

if(file.match(/\.(mp4|webm|mov)$/i)){
return <video src={url} style={{maxWidth:"80px"}}/>;
}

return <Icons.File size={26}/>;

};

const filtered = files.filter(f=>f.toLowerCase().includes(search.toLowerCase()));

return(

<div className="max-w-6xl mx-auto space-y-10 text-white">

<header>

<h1 className="text-3xl font-black uppercase italic">
Cloud Recording Hub
</h1>

<p className="text-zinc-500 text-xs uppercase">
Secure Evidence Storage
</p>

</header>


{/* BREADCRUMBS */}

<div className="flex gap-2 text-sm">

<button onClick={()=>setPath([])}>Root</button>

{path.map((p,i)=>(
<span key={i} className="flex gap-1">
/
<button onClick={()=>goBack(i)}>{p}</button>
</span>
))}

</div>


{/* CREATE FOLDER */}

<div className="flex gap-2">

<input
value={folder}
onChange={(e)=>setFolder(e.target.value)}
placeholder="New folder name"
className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded"
/>

<button
onClick={createFolder}
className="bg-blue-600 px-3 py-1 rounded text-xs"
>
Create
</button>

</div>


{/* SEARCH */}

<input
placeholder="Search files"
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded w-full"
/>


{/* UPLOAD */}

<input
type="file"
multiple
onChange={(e)=>{

const files=e.target.files;

if(!files) return;

Array.from(files).forEach(uploadFile);

}}
/>


{/* FILE GRID */}

<div className="grid grid-cols-4 gap-4">

{filtered.map(file=>{

const isFolder = !file.includes(".");

return(

<div
key={file}
className="bg-zinc-900 border border-zinc-800 rounded p-3 text-center"
>

{isFolder ? (

<button onClick={()=>enterFolder(file)}>

<Icons.Folder size={40}/>

<p className="text-xs mt-2">{file}</p>

</button>

):(

<>

<div className="flex justify-center h-20 items-center">
{preview(file)}
</div>

<p className="text-xs break-all">{file}</p>

<a
href={`/uploads/${currentFolder}/${file}`}
target="_blank"
className="text-[10px]"
>
Open
</a>

</>

)}

</div>

);

})}

</div>

</div>

);

}