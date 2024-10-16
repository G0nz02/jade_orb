import Card from "@/app/ui/hunts/card";
import { Metadata } from "next";
import { fetchHunts } from "@/app/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hunts",
}

export default async function Page() {
  const hunts = await fetchHunts();
  if (!hunts) {
    console.log('hunts is undefined');
    return;
  }

  return (
    <div className="">    
      <p>Shiny hunting page</p>
      <Link href='/dashboard/hunts/create'>New Hunt</Link>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {hunts.map((hunt) => (
          <div key={hunt.hunt_id}>
            <Card title={hunt.dexnum} value={hunt.encounters} modifiers={hunt.method}/>
          </div>
        ))}
      </div>
    </div>
  );
}