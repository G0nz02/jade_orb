'use client'

export function FinishHunt() {
    return (
        <input
            type="button"
            value="Finish Hunt"
            className=""
        />
    );
}
export function MiscInfo() {
    return (
        <div>
            
        </div>
    )
}

// Should a timer be incorporated, pauses/resumes a hunt
// change to be one button that alternates between pause and play
export function ToggleButton() {
    function handleClick() {
        //grabs first button from hunt instead of current button, find way to fix this
        const toggle = (document.getElementById('toggleButton') as HTMLInputElement);
        if (toggle.value === 'pause') {
            toggle.value = 'play';
        } else {
            toggle.value = 'pause';
        }
    }
    return (
        <input 
            id="toggleButton"
            type="button"
            value="pause"
            onClick={handleClick}
            className=""
        />
    )
}