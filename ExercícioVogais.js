let frase = "Bom dia, espero que tenha um ótimo dia!";
let quantasVogaisTem = 0;
let quaisVogais = [];


//NFD é a forma de normalizar o Unicode ()
let semAcento = frase.normalize("NFD").replace(/[\u0300-\u036f]/g,"");// A regex é uma combinacão dos códigos dos acentos possíveis

for (let i = 0; i < semAcento.length; i++) {
    if ('aeiouAEIOU'.indexOf(semAcento[i]) !== -1) {
        quantasVogaisTem++;
        quaisVogais.push(semAcento[i]);
    }
}
console.log(semAcento);
console.log("Número total de vogais:", quantasVogaisTem);
console.log("Vogais encontradas:", quaisVogais.join(', '));


//Definir a string original que contém a frase
//let frase (string) = "Bom dia, espero que tenha um ótimo dia!";
//Variável quantasVogaisTem, que será usada para contar o número de vogais na string.
//let quantasVogaisTem = 0;
//Variável qualVogal, que será usada para armazenar as vogais encontradas.
//let quaisVogais = [];

//O método normalize() é usado para normalizar a string de acordo com uma forma específica. 
//Forma "NFD" (Normalização de Decomposição Canônica) para decompor os caracteres Unicode(é um esquema de codificação de caracteres de comprimento fixo que inclui caracteres de quase todas as línguas vivas do mundo) em sua forma básica e seus diacríticos (acento, cedilha etc.). 
//A linha com '.replace()' foi adicionada para remover os caracteres diacríticos (como acentos) da string (), junto a uma expressão regular para substituir todos os caracteres diacríticos por uma string vazia, garantindo que a string resultante (semAcento) não contenha mais caracteres acentuados. 
// A regex é uma combinacão dos códigos dos acentos possíveis. /[\u0300-\u036f]/g,""
//let semAcento = string.normalize("NFD").replace(/[\u0300-\u036f]/g,"");

//loop for para iterar sobre cada caractere da string sem acentos, ele vai percorrer a string da primeira a ultima posição, porque o .lenght() retorna o numero de caracteres da nossa string.
//if verifica se o " string i " é uma vogal.
//Método indexOf() para verificar se o caractere semAcento[i] está presente na string 'aeiouAEIOU'. 
//A string 'aeiouAEIOU' contém todas as vogais minúsculas e maiúsculas. 
//Se o caractere for uma vogal, indexOf() retornará a posição onde o caractere é encontrado na string , um valor maior ou igual a 0). Se não, retornará -1 que significa que o carctere é uma vogal. 
//Se o caractere for uma vogal, incrementamos o contador de vogais quantasVogaisTem para registrar que encontramos mais uma vogal.
//Se o caractere for uma vogal, adicionamos o caractere ao array qualVogal usando o método push(), que é usado para adicionar vogais encontradas à lista qualVogal. 
//for (let i = 0; i < semAcento.length; i++) {
    //if ('aeiouAEIOU'.indexOf(semAcento[i]) !== -1) {
        //quantasVogaisTem++;
        //qualVogal.push(semAcento[i]);
    //}
//{

//console.log(semAcento);//Bom dia, espero que tenha um ótimo dia!!
//console.log("Número total de vogais:", quantasVogaisTem);//Número total de vogais: 16
//O método join(',') para converter o array em uma string, onde cada elemento é separado por uma vírgula seguida de um espaço. 
//console.log("Vogais encontradas:", qualVogal.join(', '));//Vogais encontradas: o, i, a, e, e, o, u, e, e, a, u, o, i, o, i, a