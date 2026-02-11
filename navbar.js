class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="navbar-logo">HARLEY</a>
                <div class="navbar-right">
                    <ul class="navbar-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index copy.html">Products</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <a href="#" class="navbar-btn">
                        <span>Buy Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        `;
    }
}

customElements.define('app-navbar', AppNavbar);
