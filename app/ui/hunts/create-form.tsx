export default function Form() {
  return (
    <form>
      {/* Pokemon */}
      <div>
        <label htmlFor="pokemon">
          Choose a pokemon
        </label>
        <select id="pokemon" name="pokemon" defaultValue="">
          <option value="" disabled>Pick a Pokemon</option>
          <option>Bulbasaur</option>
          <option>Charmander</option>
          <option>Squirtle</option>
        </select>
      </div>

      {/* Game */}
      <div>
        <label htmlFor="game">
          Choose a game
        </label>
        <select id="game" name="game" defaultValue="">
          <option value="" disabled>Pick a game</option>
          <option>Pokemon FireRed</option>
          <option>Pokemon Sword</option>
          <option>Pokemon Scarlet</option>
        </select>
      </div>

      {/* Method */}
      <div>
        <label htmlFor="method">
          Which method?
        </label>
        <select id="method" name="method" defaultValue="">
          <option value="" disabled>Pick a method</option>
          <option>Random Encounter</option>
          <option>Soft Reset</option>
          <option>Egg Hatching</option>
          <option>Masuda Method</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}