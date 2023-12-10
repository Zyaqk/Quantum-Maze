document.addEventListener('DOMContentLoaded', function () {
    class ElementCreator {
        createHeader() {
            const header = document.createElement('header');
            header.appendChild(this.createHeaderTop());
            header.appendChild(this.createHeaderBottom());
            return header;
        }

        createHeaderTop() {
            const headerTop = document.createElement('div');
            headerTop.className = 'headerTop';
            headerTop.appendChild(this.createH1());
            headerTop.appendChild(this.createH4());
            return headerTop;
        }

        createH1() {
            const h1 = document.createElement('h1');
            h1.textContent = 'quantum maze';
            return h1;
        }

        createH4() {
            const h4 = document.createElement('h4');
            h4.textContent = 'Immersion in the world of quantum mysteries. Solve the maze, avoid whirlwinds, use portals. A unique test in two dimensions.';
            return h4;
        }

        createHeaderBottom() {
            const headerBottom = document.createElement('div');
            headerBottom.className = 'headerBottom';
            headerBottom.appendChild(this.createButton());
            return headerBottom;
        }

        createButton() {
            const button = document.createElement('button');
            button.textContent = 'PLAY';
            button.id = 'btnPlay';
            button.onclick = playClick;
            return button;
        }

    }

    const elementCreator = new ElementCreator();
    document.body.appendChild(elementCreator.createHeader());
});