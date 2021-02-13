class MensagensView extends View<string> {

    template(texto:string): string {

        return `
            <p class="message-text">${texto}</p>
        `;
    }

}