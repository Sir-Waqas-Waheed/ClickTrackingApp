import axios from "axios"
// const axiosInstance = axios.create({
//     baseURL: 'https://192.168.1.77:7247/api',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     withCredentials: false,
//     transformResponse: [
//         (data) => {
//             return JSON.parse(data);

//         },
//     ],
// })
export const callOnBtn = async (payload) => { 
    return await axios.post("https://192.168.1.77:7247/api/analyticobjects", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

// export const callOnBtn = async (payload) => {
//     console.log(payload);
//     return await axiosInstance.post("/analyticobjects", payload);
// }

    // fetch("https://192.168.1.77:7247/api/analyticobjects", {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //     headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     }
    // }).then(r => { debugger; return r.json() }).then(f => { debugger; }).catch(e => { debugger; console.log('Excptn', e) })
