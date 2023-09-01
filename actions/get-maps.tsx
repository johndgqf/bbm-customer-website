import { Map } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/maps`;

interface Query{

}

const getMaps =async (query: Query) : Promise<Map[]> => {
    const url = qs.stringifyUrl({
        url: URL,
    })

    const res = await fetch(url);

    return res.json();
} 

export default getMaps;
    
