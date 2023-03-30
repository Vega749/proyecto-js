function mostrarNoticias() {
    // Obtener las noticias desde una API o una base de datos
    const noticias = [
      {titulo: "Noticia 1", descripcion: "Descripción de la noticia 1"},
      {titulo: "Noticia 2", descripcion: "Descripción de la noticia 2"},
      {titulo: "Noticia 3", descripcion: "Descripción de la noticia 3"},
    ];
  
    // Mostrar las noticias en el HTML
    const contenedorNoticias = document.getElementById("contenedor-noticias");
    contenedorNoticias.innerHTML = "";
    for (let i = 0; i < noticias.length; i++) {
      const noticia = noticias[i];
      const divNoticia = document.createElement("div");
      const h2Titulo = document.createElement("h2");
      h2Titulo.textContent = noticia.titulo;
      const pDescripcion = document.createElement("p");
      pDescripcion.textContent = noticia.descripcion;
      divNoticia.appendChild(h2Titulo);
      divNoticia.appendChild(pDescripcion);
      contenedorNoticias.appendChild(divNoticia);
    }
  }s