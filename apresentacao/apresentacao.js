/*
Método slice():
Definição:
O método slice() é usado para criar uma cópia de uma parte específica de um array, sem modificar o array original. Ele aceita dois parâmetros: o índice de início e o índice de fim. Ele retorna uma nova cópia do array contendo os elementos entre o índice de início (inclusive) e o índice de fim (exclusive).

Como Utilizar:

javascript
Copy code
const newArray = originalArray.slice(início, fim);

*/

//Exemplo 1:

const arrNumbers = [1, 2, 3, 4, 5];
const sliceArray1 = arrNumbers.slice(1, 4); // Retorna [2, 3, 4]

//Exemplo 2:


const arrNumbers1 = [10, 20, 30, 40, 50];
const slicedArray2 = originalArray.slice(2); // Retorna [30, 40, 50]

/*
Método splice():
Definição:
O método splice() é usado para adicionar, remover ou substituir elementos em um array. Ele aceita pelo menos dois parâmetros: o índice de início e o número de elementos a serem removidos. Ele também pode aceitar elementos adicionais que serão inseridos no lugar dos removidos.

Como Utilizar:


const newArray = originalArray.splice(início, quantidadeRemovida, elemento1, elemento2, ...);
*/
//Exemplo 1:


const arrNumbers2 = [1, 2, 3, 4, 5];
const spliceArray1 = arrNumbers2.splice(2, 2, 6, 7); // Retorna [3, 4]
// originalArray agora é [1, 2, 6, 7, 5]
//Exemplo 2:


const arrFrutas = ['maçã', 'banana', 'laranja', 'uva'];
const spliceArray2 = arrFrutas.splice(1, 1); // Retorna ['banana']
// originalArray agora é ['maçã', 'laranja', 'uva']


/*
Método filter():
Definição:
O método filter() é usado para criar um novo array contendo apenas os elementos que passam por um teste especificado por uma função. Ele aceita uma função de teste como parâmetro, que é aplicada a cada elemento do array. O método retorna um novo array contendo os elementos para os quais a função de teste retorna true.

Como Utilizar:


const newArray = originalArray.filter(funçãoDeTeste);

*/

//Exemplo 1:


const numbers = [10, 15, 20, 25, 30];
const filteredNumbers1 = numbers.filter(number => number > 20); // Retorna [25, 30]

//Exemplo 2:


const words = ['apple', 'banana', 'cherry', 'date'];
const filteredWords2 = words.filter(word => word.length > 5); // Retorna ['banana', 'cherry']

/*
Comparação entre os métodos:
Cada um desses métodos possui funções distintas e é útil em cenários específicos. O slice() é perfeito para criar cópias de partes de arrays. O splice() é ideal para adicionar, remover ou substituir elementos em posições específicas. O filter() é ótimo para criar novos arrays contendo elementos que atendem a certos critérios.
*/