const appElement = document.querySelector("#main")


fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(albums => {
      for (const album of albums) {
        appElement.insertAdjacentHTML('afterbegin', `<h1>${album.title}</h1>`)
      }
  })




  //