import Card from "@/app/ui/hunts/card";
import { Hunts } from "@/app/lib/placeholder-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hunts",
}

//could import hunts definition from prisma client. work on getting that damn database up and running!
export default function Page() {
    // make a module that contains the information about a hunt
    // should contain pokemon, number of encounters, odds + prob, and a way to increment
    return (
        <div className="">    
            <p>Shiny hunting page</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {Hunts.map((hunt) => (
                    <div key={hunt.id}>
                        <Card title={hunt.dexNum} value={hunt.currNum} modifiers={hunt.boosts}/>
                    </div>
                ))}
            </div>
        </div>
    );
}