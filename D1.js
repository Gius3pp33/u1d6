/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
String = "Il dato String in Javascript indica sia il singolo carattere che la sequenza finita di caratteri e vengono definite tramite i doppi apici"
// esempio
let name5 = "Mario"
console.log(name5) // Questo è un esempio di stringa 
Number = "il dato number in javascript viene indicato senza distinzione tra intero e decimale"
let number = 55 
console.log(number)// Questo un esempio di un numero non decimale
Boolean = "Il dato Boolean ammette due valori True e False,quindi vero o falso,serve per far prendere delle decisioni al nostro codice"
let number2 = 45 
console.log(number<number2) // in questo caso se verificassimo dalla console e facessimo un operazione come 55 < 45,darebbe un risultato di false,dato che il 55 è maggiore  
//null = "il null è una parola chiave che segnala l'assenza intenzionale di un valore,quindi annullerà il contenuto di una variabile"
let niente = null // verificando dalla console la risposta sarà null
console.log(niente)
undefined = "L'Undefined indica che una variabile non ha un valore assegnato oppure non è affato definita"
let nonDefinita = undefined
console.log(nonDefinita) // dalla console si potrà vedere che controllando la variabile la risposta sarà undefined cioè non definita


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Giuseppe"
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number3 = 12
let number4 = 20
console.log(number3 + number4)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//myName = "Longo"
//console.log(myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number5 = 4
console.log(x - number5)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
let result = name1.toLowerCase
let result1 = name2.toLowerCase
console.log(result === result1)