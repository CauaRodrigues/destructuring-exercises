// Proposta
// Em um sistema de e-commerce, todos os produtos possuem o nó de fotos,
// mas existe a possibilidade deste array de fotos vir vazio,
// já que não é obrigatório o cadastro de fotos.
// Neste caso, o ideal é que, além de extrair a primeira foto do array,
// caso o valor não esteja definido, exibir uma foto padrão
// (com a URL https://via.placeholder.com/1500) no lugar.

const produto = {
	id: 2000,
	nome: "Sabão em pó",
	preco: 12.29,
	fotos: [],
};

const fotos = produto.fotos;

// Sem destructuring:
const primeiraFotoSemDestructuring =
	typeof fotos[0] !== "undefined"
		? fotos[0]
		: "https://via.placeholder.com/1500";

// Inicie o destructuring na linha abaixo ->
const [primeiraFoto = "https://via.placeholder.com/1500"] = fotos;
// <- Finalize o destructuring na linha acima

console.log(primeiraFoto);
