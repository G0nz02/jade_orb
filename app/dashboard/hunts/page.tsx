import Card from "@/app/ui/hunts/card";
import { hunts } from "@/app/lib/placeholder-data";

export default function Page() {
    // make a module that contains the information about a hunt
    // should contain pokemon, number of encounters, odds + prob, and a way to increment
    return (
        <div className="">    
            <p>Shiny hunting page</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {hunts.map((hunt) => (
                    <div key={hunt.id}>
                        <Card title={hunt.dexNum} value={hunt.currNum} modifiers={hunt.boosts}/>
                    </div>
                ))}
            </div>
        </div>
    );
}