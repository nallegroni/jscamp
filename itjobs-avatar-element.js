class ItJobsAvatarElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    createUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render() {
        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'nallegroni'
        const size = this.getAttribute('size') ?? '40'

        const url = this.createUrl(service, username)

        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 9999px;
                    display: flex;
                }
            </style>

            <img 
                src="${url}" 
                alt="Avatar de ${username}" 
                class="avatar"
            />
            `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('itjobs-avatar', ItJobsAvatarElement);