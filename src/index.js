import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";

class ExampleComponent extends React.Component {
  verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  render() {
    return (
      <div>
        <ReCaptcha
          sitekey="6Ld7aKcUAAAAAP87os2U-31Kv1DGdsZTdwy5JhIY"
          action="home"
          verifyCallback={this.verifyCallback}
        />

        <h2>Google ReCaptcha with React </h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component.{" "}
          <br />
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    loadReCaptcha("6Ld7aKcUAAAAAP87os2U-31Kv1DGdsZTdwy5JhIY");
  }
  render() {
    return <ExampleComponent />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
