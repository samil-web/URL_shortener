'use client'
// import axios from 'axios';

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// export default function Form() {
//     //form should be functional 
//     //such as when you submit post request with a url link 
//     //as input and return a shortened url
//     // we should consider error as well
//     // onsubmit will be used to send post request
//     const router = useRouter()
//     const [submit,setSubmit] = useState(false)
//     const [body,setBody] = useState(false)
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setSubmit(true)

//         const res = await axios.post('/api/short', {
            
            
//         })
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit} className="bg-blue-500 py-10 px-5 w-3/5 flex justify-around my-16 mx-auto rounded-md">
//             <input onChange={(e) => setBody(e.target.value)} className='bg-white w-4/5 rounded-md px-5 py-2 ' placeholder="Shorten a link here..."></input>
//             <button onClick={(e) => {e.preventDefault();handleSubmit(e)}} className="bg-[#28D0CD] px-5 py-2 rounded-md text-white">Shorten It!</button>
//         </form>
//     </div>
    
//   )
// }

import axios from 'axios';
import { useState } from "react";


export default function Form() {
    const [shortenedUrl, setShortenedUrl] = useState(null);
    const [error, setError] = useState(null);
    const [longUrl, setLongUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/short", { origUrl: longUrl }).then((res) => res.data);
            setShortenedUrl(response.data.shortURL);
            setError(null);
        } catch (error) {
            setError(`Error: ${error.response}`);
            setShortenedUrl(null);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-blue-500 py-10 px-5 w-3/5 flex justify-around my-16 mx-auto rounded-md">
                <input onChange={(e) => setLongUrl(e.target.value)} className='bg-white w-4/5 rounded-md px-5 py-2' placeholder="Shorten a link here..."></input>
                <button type="submit" className="bg-[#28D0CD] px-5 py-2 rounded-md text-white">Shorten It!</button>
            </form>
            <p>{longUrl && <p>Original URL: <a href={longUrl} target="_blank" rel="noopener noreferrer">{longUrl}</a></p>}</p>
            {shortenedUrl && <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>}
            {error && <p>{error}</p>}
        </div>
    )
}