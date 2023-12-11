document.addEventListener("DOMContentLoaded", function() {
    const snowfall = document.getElementById("snowfall");
  
    if (snowfall) {
      createSnowflakes();
    }
  
    function createSnowflakes() {
      for (let i = 0; i < 50; i++) {
        createSnowflake();
      }
  
      function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
        snowfall.appendChild(snowflake);
  
        snowflake.addEventListener("animationiteration", function() {
          snowfall.removeChild(snowflake);
          createSnowflake();
        });
      }
    }
});
  