import { createGlobalStyle } from "styled-components";

//Creating a global style variable
export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'open sans condensed', sans-serif;
  padding: 20px 60px;

  /*  Create media query for views less than 800px */
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`
