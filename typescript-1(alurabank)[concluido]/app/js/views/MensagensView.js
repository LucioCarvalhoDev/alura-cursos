class MensagensView extends View {
    template(texto) {
        return `
            <p class="message-text">${texto}</p>
        `;
    }
}
