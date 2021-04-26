//Chiedo all'utente il suo nome e lo saluto

/* var nomeUtente = prompt ("Come ti chiami?");
console.log(nomeUtente);

document.getElementById("saluto").innerHTML = "Ciao " + nomeUtente; */


//Chiedo all'utente la sua età e comunichiamo l'anno di nascita

/* var eta = prompt ("Quanti anni hai?");
console.log(eta);

var etaUtente = parseInt(eta);
console.log(etaUtente);

document.getElementById("anni").innerHTML = etaUtente;

var data = new Date();
console.log(data);
var annoCorrente = data.getFullYear();
//var annoCorrente = 2021;
console.log(annoCorrente);

var annoNascita = annoCorrente - etaUtente;
console.log(annoNascita);

document.getElementById("anno_nascita").innerHTML = annoNascita; */


//Chiedi all'utente il suo nome
var nomeUtente = prompt("Qual'è il tuo nome?");
console.log(nomeUtente);

//poi chiedi il suo cognome
var cognomeUtente = prompt("Qual'è il tuo cognome?");
console.log(cognomeUtente);


//poi chiedi il suo colore preferito
var colore = prompt("Qual'è il tuo colore preferito?");
console.log(colore);


//Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("password_utente").innerHTML = nomeUtente + cognomeUtente + colore + "21";