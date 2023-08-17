
//array.prototype


// 1. array.prototype.splice()

// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

// - Indice de Início: O índice no qual a operação de modificação deve começar. Pode ser um valor negativo, indicando a contagem a partir do final do array.

// - Quantidade de Elementos a Remover: O número de elementos a serem removidos a partir do índice de início. Se esse valor for 0, nenhum elemento será removido.
// - Elementos para Adicionar: Quaisquer elementos que você deseja adicionar ao array a partir do índice de início.'

// exemplo:

const arrNames = ["Gustavo", "Marcelo", "Augusto"];

//parte1: Remova o nome "Augusto" da array.

var removeName = arrNames.splice(2,1)        // arrNomes.splice(INDICE INICIAL, QUANTIDADE DE ELEMENTOS A SEREM REMOVIDOS)
// Foi criado uma nova array somente com o nome removido. Além disso, a array arrNames foi modificada, deixando somente os nomes "Gustavo" e "Marcelo".
console.log(removeName, arrNames);
// const removeName = ["Augusto"], const arrNames =["Gustavo", "Marcelo"]


//parte2: Agora adicione o nome "Miguel" no meio(indice 1) da array arrNomes

arrNames.splice(1,0,"Miguel");     
console.log(arrNames)
// const arrNames = ["Gustavo", "Miguel", "Marcelo"]

//parte3: Remova os nomes "Marcelo" e "Miguel" e adicione "José" e "Gabriel"

var removeName = arrNames.splice(1,2, "José", "Gabriel")
console.log(removeName, arrNames)
// const removeName = ["Marcelo, Miguel"] , const arrNames =["Gustavo", "José", "Miguel""]



// -----------------------------------------------------------------------//

// 2. Método slice()

// O método slice() retorna uma cópia de parte de um array(shallow copy) a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.

//Índice de Início: O índice onde a cópia deve começar, inclusive. Se não for especificado, o valor padrão é 0. Se o índice for negativo, ele será contado a partir do final do array.

//Índice de Fim: O índice onde a cópia deve terminar, excluindo esse índice. Se não for especificado, a cópia irá até o final do array. Se o índice for negativo, ele será contado a partir do final do array.


// exemplo:

const arrNumeros = [1,2,3,4,5];

const arrCompleta = arrNumeros.slice()
console.log(arrNumeros, arrCompleta);           // Lembrando que a Array original não é modificada. 

// copie a arrNumeros a partir do Índice 1

var subArrayNumeros = arrNumeros.slice(1);
console.log(arrNumeros, subArrayNumeros);       // Foi copiado toda a arrNumeros, porém o índice 0(1) não foi incluído.


// copie a arrNumeros do índice 2 até o índice 4.

var subArrayNumeros = arrNumeros.slice(2,4);
console.log(arrNumeros, subArrayNumeros);       // Foi copiado os índices 2(3) e 3(4), lembrando que o 4(5) não é incluído.


// copie a arrNumeros 