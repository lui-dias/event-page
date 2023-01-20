import "./Form.css";

export const Form = () => {
  return (
    <main className="container-form flex">
      <section className="form grid">
        <header className="header flex">
          <h1>Subscribe to event</h1>
        </header>

        <form>
        <label>
            First Name
            <input type="text" name="name" className="login"/>
          </label>
          <label>
            Last Name
            <input type="text" name="name" className="login"/>
          </label>
          <label>
            NICKNAME
            <input type="text" name="name" className="login-verify"/>
          </label>
          <label>
            EMAIL
            <input type="text" name="name" className="login-verify" />
          </label>
          <input type="submit" value="Subscribe" />
        </form>
      </section>
    </main>
  );
};
