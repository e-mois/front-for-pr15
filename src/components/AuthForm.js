import Header from "./Header";

function AuthForm(props) {
  return (
    <>
      <Header buttonName={props.headerLinkName} headerLink={props.headerLinkUrl}/>
      <main className="content">
        <section className="auth">
          <h2 className="auth__title">{props.title}</h2>
          <form className="auth__form" name={props.name} onSubmit={props.onSubmit}>
            {props.children}
            <button type="submit" className="auth__button">{props.buttonName}</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default AuthForm;