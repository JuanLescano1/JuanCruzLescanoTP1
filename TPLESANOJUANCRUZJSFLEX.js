window.onload = iniciar;
function iniciar()
{
    var btnMeGusta=document.getElementById("btnMeGusta")
    btnMeGusta.addEventListener("click",clickbtnMeGusta)

    var Seguir=document.getElementById("Seguir")
    Seguir.addEventListener("click",clickSeguir)

    var Comentarios=document.getElementById("Comentarios")

    
    var btnComentar=document.getElementById("btnComentar")
    btnComentar.addEventListener("click",AgregarAlaLista)

    var disableButton = function() { this.disabled = true; };
    btnComentar.addEventListener('click', disableButton , false);




    var Comentarios=document.getElementById(("Comentarios"))
}




function clickSeguir()
{   
    if (Usuario.value!="")
    {
        if (Seguir.textContent=="Seguir")
        {
            Seguir.textContent="Dejar de seguir"
            document.getElementById("Seguir").style.backgroundColor="rgb(231, 231, 231)"
            document.getElementById("Seguir").style.color="rgb(0, 132, 255)"
        }
        else
        {
            Seguir.textContent="Seguir"
            document.getElementById("Seguir").style.backgroundColor="rgb(0, 132, 255)"
            document.getElementById("Seguir").style.color="white"
        }
    }
    else
    {
        alert("Ingrese un usuario.")
    }   
}
function Contador()
{
    var lblMeGusta =document.getElementById("lblMeGusta")
    
}
function clickbtnMeGusta()
{
    if (Usuario.value!="")
    {
        var lblMeGusta =document.getElementById("lblMeGusta")
        if(parseInt(lblMeGusta.textContent)==200)
        {
            
            lblMeGusta.textContent=parseInt(lblMeGusta.textContent)+1;
        }
        else
        {
            lblMeGusta.textContent=parseInt(lblMeGusta.textContent)-1;
        }
    }
    else
    {
        alert("Ingrese un usuario.")
    }
    
 
}





function AgregarAlaLista()
{
    
    
     if (Usuario.value!="")
    {

        var Comentarios=document.getElementById(("Comentarios"))
        var elementoHtml=document.createElement("dt")
        var DejarComentario=document.getElementById("DejarComentario")
    
            
        
        if (DejarComentario.value!="")
        {
                
            elementoHtml.textContent=Usuario.value+" "+DejarComentario.value;
            Comentarios.appendChild(elementoHtml)
                
                
        }
        else{alert("No puede agregar un comentario vacio.")}
    }
    else
    {
            alert("No ha ingresado usuario.")
    }
      
    
}
