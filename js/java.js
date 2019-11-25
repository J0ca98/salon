function validateForm() {
     var x = document.forms["#konForma"]["#imePrezime"].value;
     var y = document.forms["#konForma"]["#email"].value;
     var z = document.forms["#konForma"]["#phone"].value;
    if (x == null || x == "") {
        alert("Morate uneti Vaše Ime i Prezime.");
        return false;
    }
    if (y == null || y == "" || y.indexOf('@')<=0 || ( y.chatAt(y.length-3)!='.' && y.chatAt(y.length-3)!='.') ) {
        alert("Morate uneti Vaš email.");
        return false;
    }
    if (z == null || z == "") {
        alert("Morate uneti Vaš broj telefona.");
        return false;
    }
    else{
        alert("Podaci su zabeleženi.");
    }
}


$('#cenovnik').click(function(){
    $('#cena').slideToggle(); 
});

$('#forma').click(function(){
    $('#konForma1').slideToggle();   
});

$('#send').click(function(){
     var x = document.forms["konForma"]["imePrezime"].value;
     var y = document.forms["konForma"]["email"].value;
     var z = document.forms["konForma"]["phone"].value;
    if (x == null || x == "") {
        alert("Morate uneti Vaše Ime i Prezime.");
        return false;
    }
    if (y == null || y == "" || y.indexOf('@')<=0 || ( y.chatAt(y.length-3)!='.' && y.chatAt(y.length-3)!='.') ) {
        alert("Morate uneti Vaš email.");
        return false;
    }
    if (z == null || z == "") {
        alert("Morate uneti Vaš broj telefona.");
        return false;
    }
    
    alert("Podaci su zabeleženi.");
    
});

$('#send').click(function(){
     var x = document.forms["konForma1"]["imePrezime"].value;
     var y = document.forms["konForma1"]["email"].value;
     var z = document.forms["konForma1"]["phone"].value;
    if (x == null || x == "") {
        alert("Morate uneti Vaše Ime i Prezime.");
        return false;
    }
    if (y == null || y == "" || y.indexOf('@')<=0 || ( y.chatAt(y.length-3)!='.' && y.chatAt(y.length-3)!='.') ) {
        alert("Morate uneti Vaš email.");
        return false;
    }
    if (z == null || z == "") {
        alert("Morate uneti Vaš broj telefona.");
        return false;
    }
    
    alert("Podaci su zabeleženi.");
    
});