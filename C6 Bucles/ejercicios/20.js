function sumarHastaNConBreak(n) {

   var suma = 0;
   // var i =0;
   
   for (var i=0; i<=n; i++)
   {
      suma = suma +i;
      if (suma > 100)
      break
   }
   return suma;

   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
}

module.exports = sumarHastaNConBreak;
console.log (sumarHastaNConBreak(20));
