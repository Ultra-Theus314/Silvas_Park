function openTab(evt, tabName) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
    {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

function editaCadUsu() 
{
    
}

function validarNome() 
{
    const value = document.getElementById("nome").value;
    const re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\\-\\ \\s]+$/;
    if (re.test(value)) 
    {
        document.troca.submit();
    } 
    else 
    {
        alert("Preencha o campo com um nome válido!");
        document.getElementById("nome").value ="";
        document.getElementById("nome").focus();

        return false;
    }
}

function validarUsuario() 
{
    const value = document.getElementById("usuario").value;
    const re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\\-\\\\s]+$/;
    if (re.test(value)) 
    {
        document.troca.submit();
    } 
    else 
    {
        alert("Preencha o campo com um nome válido!");
        document.getElementById("usuario").value ="";
        document.getElementById("usuario").focus();

        return false;
    }
}

function emailValido(email) {
    if ((email == null) || (email.length < 4))
    return false;
  
    var partes = email.split('@');
    if (partes.length < 2 ) return false;
  
    var pre = partes[0];
    if (pre.length == 0) return false;
    
    if (!/^[a-zA-Z0-9_.-/+]+$/.test(pre))
        return false;
  
    // gmail.com, outlook.com, terra.com.br, etc.
    var partesDoDominio = partes[1].split('.');
    if (partesDoDominio.length < 2 ) return false;
  
    for ( var indice = 0; indice < partesDoDominio.length; indice++ )
    {
        var parteDoDominio = partesDoDominio[indice];
  
        // Evitando @gmail...com
        if (parteDoDominio.length == 0) return false;  
  
        if (!/^[a-zA-Z0-9-]+$/.test(parteDoDominio))
            return false;
    }
  
    return true;
  }
  
  function validarEmail() {
    var email = document.getElementById("email").value;
    
    if (emailValido(email)) {
        document.getElementById("checkmailerro").innerHTML = "";
        document.getElementById("checkmailok").innerHTML = "E-mail válido.";
  
    } else {
        alert("O EMAIL [" + email + "] não é válido!");
        document.getElementById("checkmailok").innerHTML = "";
        document.getElementById("checkmailerro").innerHTML = "E-mail Invalído.";
        document.getElementById("campoEMAIL").focus();
    }
  }
  
  function bloquearNumeros(event) {
    const keyCode = event.keyCode || event.which;
    if (keyCode >= 48 && keyCode <= 57) {
        event.preventDefault(); // Bloqueia a entrada de números
    }
  }
