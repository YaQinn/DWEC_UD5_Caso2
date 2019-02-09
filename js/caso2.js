window.onload=load;

function load()
{
  console.log("Window cargada");
  escribeNombres();
}

function escribeNombres()
{
  //Comprobar el número de h2s de clase "articulo-titulo" de la página
  var art = document.getElementsByClassName("articulo-titulo");
  //console.log(art);
  console.log("Hay "+art.length+" artículos");
  //Recorrer los h2s para sacar los href a que tiene dentro
  for (var i = 0; i < art.length; i++)
  {
      var href = art[i].getElementsByTagName("a");
      //Recorrer para mostrar el texto
      for (var n = 0; n < href.length; n++)
      {
        var txt = href[n].innerHTML;
        console.log(txt);
        alert(txt);
      }
  }
}
