function playClick() {
    const mapCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mapID = mapCount[Math.floor(Math.random() * mapCount.length)];
    const redirectUrl = `http://localhost:3000/play?id=${mapID}`;

    window.location.href = redirectUrl;
}