const mainDiv = document.getElementById("main");

    for (let i = 99; i >= 0; i--) {
      if (i === 0) {
        mainDiv.innerHTML += "No more snowflakes in the air<br>";
      } else if (i === 1) {
        mainDiv.innerHTML += i + " snowflake in the air<br>";
      } else {
        mainDiv.innerHTML += i + " snowflakes in the air<br>";
      }
    }