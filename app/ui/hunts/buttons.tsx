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

// change to be one button that alternates between pause and play
export function ToggleButton() {
    function handleClick() {
        const toggle = (document.getElementById('toggleButton') as HTMLInputElement);
        (toggle.value === 'pause') ? toggle.value = 'play' : toggle.value = 'pause';
    }
    return (
        <input id="toggleButton" type="button" value="pause" onClick={handleClick}/>
    )
}