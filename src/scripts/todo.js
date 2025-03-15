class TodoComponent {
    #targetEl;
    #listEl;
    #footerEl;
    #inputEl;
    #addButtonEl;

    mount(targetEl) {
        this.#targetEl = targetEl

        this.#listEl = document.createElement('ul');
        this.#targetEl.appendChild(this.#listEl);

        this.#footerEl = document.createElement('form');
        this.#targetEl.appendChild(this.#footerEl);

        this.#inputEl = document.createElement('textarea');
        this.#footerEl.appendChild(this.#inputEl);
        
        this.#addButtonEl = document.createElement('button');
        this.#addButtonEl.textContent = 'Dodaj'

        this.#addButtonEl.addEventListener('click', (evt) => {
            this.addItem()
            evt.preventDefault()
        })

        this.#footerEl.appendChild(this.#addButtonEl);
    }

    addItem(extText) {
        const itemEl = document.createElement('li')
        itemEl.textContent = extText ? extText : this.#inputEl.value
        this.#inputEl.value = ''
        this.#listEl.appendChild(itemEl); 
    }
}