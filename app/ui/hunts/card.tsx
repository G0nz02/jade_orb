// Prob have to import multitudes of items to get this working
import { hunts } from '@/app/lib/placeholder-data'
import EncounterDisplay from './buttons';
import { ToggleButton } from './buttons';

// Pass data in from a query that grabs from pokemon table (image and name) and hunt table
export default function Card({title, value, modifiers} : {title: string, value: string, modifiers: string[]}) {
    return (
        <div className='rounded-md text-white bg-green-900 w-64'>
            <div className='p-2'>{title}</div>
            <div className='flex justify-center'>
                <EncounterDisplay value={value}/>
            </div>
            <div className='flex justify-center'>
                <ToggleButton />
            </div>
            <div>{modifiers}</div>
        </div>
    );
}