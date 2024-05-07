function loguear() 
{

    let user = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("clave").value;

    if(user=="Javier" && email=="ljmontilla56" && pass=="1234") {

        window.location="index.html"

    }

    else 
    {
        alert("Datos Incorrectos");
    }


}