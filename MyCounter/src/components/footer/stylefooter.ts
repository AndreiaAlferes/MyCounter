import { css } from 'lit';

export const style = [
  css`
    :host {
      --font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: whithe;
      text-align: center;
      padding: 10px;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-family: (var --font-family);
      font-size: 24px;
      font-weight: 700;
      background-image: linear-gradient(#b393d3, #553c9a);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
  `,
];
