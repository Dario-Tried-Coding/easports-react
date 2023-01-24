import React from "react";
import style from "../../SCSS/5-Pages/Form.module.scss";

function Form({}) {
  return (
    <div className={style.page}>
      <div className={style.content}>
        <img src="https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.20230120.211.3ef4f9a/p/statics/juno/img/EALogo-New.svg" alt="Logo image" />
        <h1>Accedi al tuo account EA</h1>
        <form action="/">
          <label htmlFor="email">E-mail</label>
          <div className={style.input}>
            <input type="email" name="email" id="email" placeholder="Inserisci la tua e-mail" />
          </div>
          <label htmlFor="password">Password</label>
          <div className={style.input}>
            <input type="password" name="password" id="password" placeholder="Inserisci la tua password" />
            <button>
              <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="m0 0h16v16h-16z"></path>
                  <path
                    d="m8 3.66666667c3.2032732 0 6.6666667 2.54318984 6.6666667 4.33333333s-3.4633935 4.3333333-6.6666667 4.3333333c-3.20327316 0-6.66666667-2.54318981-6.66666667-4.3333333s3.46339351-4.33333333 6.66666667-4.33333333zm0 1.33333333c-1.38181706 0-2.74575629.50269607-3.87107038 1.3290207-.87134632.63983463-1.46226295 1.41228951-1.46226295 1.6709793s.59091663 1.03114467 1.46226295 1.6709793c1.12531409.8263246 2.48925332 1.3290207 3.87107038 1.3290207s2.7457563-.5026961 3.8710704-1.3290207c.8713463-.63983463 1.4622629-1.41228951 1.4622629-1.6709793s-.5909166-1.03114467-1.4622629-1.6709793c-1.1253141-.82632463-2.48925334-1.3290207-3.8710704-1.3290207zm0 1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0 1.33333333c-.36818983 0-.66666667.29847684-.66666667.66666667s.29847684.66666667.66666667.66666667.66666667-.29847684.66666667-.66666667-.29847684-.66666667-.66666667-.66666667z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div className={style.checkbox}>
            <label htmlFor="remember"> <span className={style.square}> <span>c</span> </span> Ricordami</label>
          </div>
          <button type="submit">ACCEDI</button>
          <button className={style.transparent}>CREA ACCOUNT</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
