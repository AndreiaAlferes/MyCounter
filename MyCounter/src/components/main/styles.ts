import { css } from 'lit';

export const style = [
  css`
    :host {
      --font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    .app-wrapper {
      --max-width: 1065px;
      --padding: 1rem;

      width: min(var(--max-width), 100% - (var(--padding) * 2));
      margin-inline: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      text-align: center;
      margin: 40px auto;
      margin-bottom: 20px;
      font-size: 300px;
      justify-content: center;
      align-items: center;
      font-family: (var --font-family);
      color: black;
    }

    .container.negative {
      color: red;
    }

    .container.positive {
      color: green;
    }

    .accesskey-container {
      height: 100vh; /* opcional - define a altura total da página */
    }

    .btn {
      font-family: (var --font-family);
      padding: 10px 20px;
      margin: 0 5px;
      font-size: 80px;
      cursor: pointer;
      background-color: #b393d3;
      color: #fff;
      border: none;
      border-radius: 4px;
    }

    .btn:hover {
      background-color: #553c9a;
    }

    .btn:active {
      background-color: #553c9a;
    }

    .btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
  `,
];
