class defaultHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="flex header items-center">
                <nav class="links-logo-container flex items-center">
                    <div class="logo">
                        <a href="home.html"></a>
                    </div>
                    <div class="links">
                        <a class='hover-black' href="pricing.html">Pricing</a>
                        <a class='hover-black' href="about.html">About</a>
                        <a class='hover-black' href="contact.html">Contact</a>
                    </div>
                </nav>
                <button class="demo-button pointer">Schedule a Demo</button>
                <div class='circle-cover'></div>
                <div class='hamburger-icon'></div>
                    <div class='hamburger-menu flex'>
                        <img class='hamburger-cross' src="./assets/shared/mobile/close.svg" alt="close">
                        <ul class="hamburger-links flex">
                            <a  href="pricing.html">Pricing</a>
                            <a  href="about.html">About</a>
                            <a  href="contact.html">Contact</a>
                        </ul>
                        <button class="demo-button">Schedule a Demo</button>
                    </div>
            </header>
        `
    }
}

class defaultFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="flex footer items-center">
                <nav class="links-logo-container flex items-center">
                    <div class="logo">
                        <a href="home.html"></a>
                    </div>
                    <div class="links">
                        <a class='hover-black' href="pricing.html">Pricing</a>
                        <a class='hover-black' href="about.html">About</a>
                        <a class='hover-black' href="contact.html">Contact</a>
                    </div>
                </nav>
                <ul class='flex social-links'>
                    <li class='Facebook'></li>
                    <li class='X'></li>
                    <li class='Linkedin'></li>
                </ul>
            </footer>
        `
    }
}


class defaultForm extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =   `
            <form class='form'>
                <div class="form-inputs-container flex">
                    <input placeholder="Enter email address" type="email">
                    <button class="demo-button">Schedule a Demo</button>
                </div>
            </form>
        `
    }
}


window.customElements.define('default-header',defaultHeader);
window.customElements.define('default-footer',defaultFooter);
window.customElements.define('default-form',defaultForm);