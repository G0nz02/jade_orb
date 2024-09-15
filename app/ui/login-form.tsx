export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>
        <input 
          id="password"
          name="password"
          type="password"
          placeholder="Enter Password"
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}