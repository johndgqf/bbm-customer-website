import { HomepageFeature } from "@/types";
import NoResults from "@/components/ui/no-results";
import HomepageCard from "./ui/homepage-card";

interface HomepageListProps{
    title:string;
    content: HomepageFeature[];
    items: HomepageFeature[];
};

const HomepageFeatureList: React.FC<HomepageListProps> =({
    title,
    items
}) =>{
    return(
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length===0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item)=>(
                    <HomepageCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
}

 
export default HomepageFeatureList;