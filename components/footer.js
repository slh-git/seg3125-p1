class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css");
      </style>
      <footer class="pt-5 my-5 text-muted border-top text-center">
        <a
          href="https://github.com/howardt12345"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none text-muted"
        >
          &copy; 2022 Howard Tseng</a
        >
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
