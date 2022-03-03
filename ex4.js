/**
 * indexOF
 */

 /**
  * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion)

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  */

  let pezPosicion2 = muchos_peces.indexOf("estrella")
  console.log("Estrella está en la posición: " + pezPosicion2)

  // sale en -1 ya que esta mal escrito no esta en mayuscula. Por lo que al buscar estrella en minuscula no se escuentra en la array y muestra un -1. Al modificarlo y poner estrella con mayuscula aparace el numero 3.
 
  
