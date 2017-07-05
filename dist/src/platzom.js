//Las palabras que terminen en ar se les queta esos caracteres
//las palabras que terminen en Z se le agrega pe al final
//si la palabra tiene mas de 10 letras se debe partir a la mitad
//si la palabra es un palindromo nos devuelve la ultima palabra pero en intercalando mayusculas y minusculas
//toLowerCase = convertir las palabras en minusculas
//endsWith seleccionar las letras con las que termina la palabra
//slice eliminar en javaScript
//split separar palabras y join es para unirlas
//chartAt posicion de una cadena de caracteres


export default function platzom(str) {
  let traduccion = str;
  if (traduccion.toLowerCase().endsWith("ar")) {
    traduccion = traduccion.slice(0, -2);
  }
  if (traduccion.toLowerCase().startsWith("z")) {
    traduccion += 'pe';
  }
  length = str.length;
  if (length <= 10) {
    let primera = traduccion.slice(0, Math.round(length / 2));
    let segunda = traduccion.slice(Math.round(length / 2));
    traduccion = `${primera}-${segunda}`;
  }
  const reverse = str => str.split('').reverse().join('');

  function minMay(str) {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return traduccion;
}

platzom('programar')
platzom('zorro')
platzom('abecedario')
platzom('sometemos')