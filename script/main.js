console.log('JS is working!');

/**
VENDITA BIGLIETTO TRENO
**/
 // REFERENZE
 var container = document.getElementById('biglietto');
 var bottoneGenera = document.getElementById('bottoneGenera');
 var bottoneAnnulla = document.getElementById('bottoneAnnulla');

 // EVENTI
 //Generare biglietto
 bottoneGenera.addEventListener('click',
  function() {
    // Ottieni valori input utente
    var nome = document.getElementById('nome').value;
    console.log(nome);

    var kmDaPercorrere = document.getElementById('km').value;
    console.log(kmDaPercorrere);

    var fasciaEta = document.getElementById('fascia-eta').value;
    console.log(fasciaEta);

    // Calcolo BIGLIETTO
    var prezzoKm = 0.21;
    var costoBiglietto = kmDaPercorrere * prezzoKm;
    var offerta = 'Biglietto Standard';

    // Calcolo costo e offerta applicata
    if (fasciaEta == 'minorenne') {
      // 20% sconto
      costoBiglietto -= costoBiglietto * 0.2;
      offerta = 'Sconto Minorenne';
    }
    else if (fasciaEta == 'over65') {
      // 40% Sconto
      costoBiglietto -= costoBiglietto * 0.4;
      offerta = 'Sconto Over 65';
    }

    // Controllo dei decimali
    costoBiglietto = costoBiglietto.toFixed(2);

    // Numero Random per Carrozza da 1 a 9
    var numCarrozza = Math.floor(Math.random() * 9) + 1;

    // Numero Random per codice cambio prenotazione da 90000 a 100000 escluso
    var codiceCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;

    // Inseriamo valori nella pagina
    document.getElementById('nome-passeggero').innerHTML = nome;
    document.getElementById('offerta-applicata').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo').innerHTML = costoBiglietto + '€';

    // Mostra biglietto
    container.className = 'show';
  }
);

// Resetta biglietto
bottoneAnnulla.addEventListener('click',
  function(){
    // Reset input
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia-eta').value = 'minorenne';

    // Reset output
    document.getElementById('offerta-applicata').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';
    document.getElementById('costo').innerHTML = '';

    // Reset biglietto
    container.className = 'hidden';
  }
);
