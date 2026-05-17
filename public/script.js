//Definição dos dados (JSON)
const catalogo = [
    {
        id: 1,
        titulo: "As Branquelas",
        tipo: "filme",
        ano: 2002,
        generos: ["comédia", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Enrolados",
        tipo: "filme",
        ano: 2010,
        generos: ["romance", "aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 3,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["suspense", "drama"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 4,
        titulo: "Grey's Anatomy",
        tipo: "serie",
        ano: 2005,
        generos: ["romance", "drama"],
        nota: 7.5,
        assistido: false
    },
    {
        id: 5,
        titulo: "Como Eu Era Antes de Você",
        tipo: "filme",
        ano: 2016,
        generos: ["romance", "drama"],
        nota: 10,
        assistido: true
    },
    {
        id: 6,
        titulo: "Invocação do Mal",
        tipo: "filme",
        ano: 2013,
        generos: ["terror", "mistério"],
        nota: 9,
        assistido: true
    }
];

//Acesso e leitura dos dados
console.log("Catálogo completo:", catalogo);
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];

if (terceiroItem.generos.length > 1) {

    console.log("Segundo gênero:", terceiroItem.generos[1]);

} else {

    console.log("O terceiro item não possui um segundo gênero.");
}

//Iterações com iterators (tarefas)
//Listagem com forEach
console.log("Lista dos títulos:");
catalogo.forEach(item => {

    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);

});

//Transformação com map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títilos em maiúsculo:", titulosEmCaixaAlta);

//Seleção com filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Títulos não assistidos:", naoAssistidos.length);

//Busca com find
const itemPrimeiro = catalogo.find(item => item.nota >= 9);

if (itemPrimeiro) {

    console.log(`Primeiro item do catálogo com nota maior ou igual a 9: ${itemPrimeiro.titulo} (${itemPrimeiro.nota})`);

} else {

    console.log("Nenhum item encontrado com nota maior ou igual a 9");
}

