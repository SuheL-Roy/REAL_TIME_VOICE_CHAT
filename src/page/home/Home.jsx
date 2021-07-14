import React from "react";
import styles from "./home.module.css";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/button/Button";
import { Link, useHistory } from "react-router-dom";
export default function Home() {
  const sign = {
    color:"#0077ff",
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'3px'

  }

  const history = useHistory();

  function startRegister(){
    history.push('/register');
    // console.log("button clicked");
  }
  return (
    <div className={styles.cardwraper}>
      <Card title="Welcome to CodingCafe!" icons="logo">
        <p className={styles.text}>
          We’re working hard to get CodingCafe ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks.
        </p>

        <div>
          <Button onclick={startRegister} text="Get your username"/>
        </div>
        <div className={styles.signin}>
          <span className={styles.invite}>Have an invite text?</span>
          <Link style={sign} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
}
