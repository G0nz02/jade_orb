export default function NewUserForm() {
  return (
    <form>
      {/* we need username, email, and password. then confirm password and make sure username is unique */}
      <div>
        <label htmlFor="username">
          Create your Username
        </label>
        <input 
          id="username"
          name="username"
          type="text"
          placeholder="Enter Username"
          required
        />
      </div>

      <div>
        <label htmlFor="email">
          Enter your Email Address
        </label>
        <input 
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email Address"
          required
        />
      </div>

      <div>
        <label htmlFor="password">
          Create a Password
        </label>
        <input 
          id="password"
          name="password"
          type="password"
          placeholder="Enter Password"
          required
        />
      </div>

      <div>
        <label htmlFor="confirm-password">
          Confirm Password
        </label>
        <input 
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Confirm Your Password"
          required
        />
      </div>

      <button type="submit">Create Account</button>
    </form>
  )
}