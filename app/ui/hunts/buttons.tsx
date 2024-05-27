'use client'

export default function EncounterDisplay({value}: {value: string}) {
    return (
        <button value={value} onClick={(e) => {
            let currNum = Number(e.currentTarget.value) + 1;
            e.currentTarget.value = currNum.toString();
            e.currentTarget.textContent = currNum.toString();
        }}>{value}</button>
    );
}