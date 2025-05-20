// import axios from 'axios';

// import { Signup } from "../components/Signup";


// async function fetchData(){
//     const response = await axios.get('http://localhost:8000/api/user');
//     return response.data;
// }

// export default async function User(){
//     const data = await fetchData();
//     // await new Promise(e=>setTimeout(e,3000));
//     return (
//         <div>
//             <h2>{data.name}</h2>
//         </div>
//     )
// }

import { Signup } from '../components/Signup';

export default function(){
    return <Signup/>
}