import { HomepageFeature } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homepageFeatures`;

interface Query{

}

const getHomepageFeatures =async (query: Query) : Promise<HomepageFeature[]> => {
    const url = qs.stringifyUrl({
        url: URL,
    })

    const res = await fetch(url);

    return res.json();
} 

export default getHomepageFeatures;
    
