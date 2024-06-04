export function FetchHuntMods() {
    return '';
}

export function FetchBaseOdds(modifiers: string[]) {
    let rolls = 1;
    let chance = 8192;
    modifiers.forEach((mod) => {
        switch(mod){
            case 'Masuda':
                rolls += 5;
                break;
            case 'Sandwich':
                rolls += 3;
                break;
            case 'Charm':
                rolls += 2;
                break;
            default:
                break;
        }
    })
    //possibly return object containing rolls and base odds? Useful for calcing odds for SV outbreaks, SOS, chain fishing, etc.
    return rolls/chance;
}

export function CalcBinomialProbability(probability: number, trials: number) {
    // requires calculating factorials. prob just import a library that already does that
}