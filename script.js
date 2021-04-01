function adicionarFilme() {
  var campoFilmeFav = document.querySelector('#filme')
  var filmeFav = campoFilmeFav.value
  if (filmeFav.endsWith('.jpg')){
    listarFilmes(filmeFav)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFav.value = ""
}

function listarFilmes(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}