const notas = [ 10, 9, 8, 7, 6]; 

const notasAtulizadas = notas.map( nota => nota == 10 ? nota : ++nota )

console.log(notasAtulizadas); 