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
            return button;
        }

        createNav() {
            const nav = document.createElement('nav');
            nav.appendChild(this.createNavLeft());
            nav.appendChild(this.createNavRight());
            return nav;
        }

        createNavLeft() {
            const navLeft = document.createElement('div');
            navLeft.className = 'navLeft';
            navLeft.appendChild(this.createH3Left());
            return navLeft;
        }

        createH3Left() {
            const h3Left = document.createElement('h3');
            h3Left.textContent = '2023 - 2024';
            return h3Left;
        }

        createNavRight() {
            const navRight = document.createElement('div');
            navRight.className = 'navRight';
            navRight.appendChild(this.createH3Right());
            return navRight;
        }

        createH3Right() {
            const h3Right = document.createElement('h3');
            h3Right.textContent = 'All Rights Reserved.';
            return h3Right;
        }
    }

    const elementCreator = new ElementCreator();
    document.body.appendChild(elementCreator.createHeader());
    document.body.appendChild(elementCreator.createNav());
});