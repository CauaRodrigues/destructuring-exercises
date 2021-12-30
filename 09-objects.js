// Proposta
// Ok, agora chegamos novamente ao uso do rest operator, mas agora, com objetos!
// O cenário vai ser bem semelhante ao que foi feito com arrays,
// sendo um produto com um nó de atributos. O atributo produtoIndicado
// é o mais importante e precisa ser extraído a parte:
// os demais, devem ser guardados em uma variável chamada atributosAdicionais.

const produto = {
	id: 2000,
	nome: "Sabão em pó",
	preco: 12.29,
	fotos: {
		fotoPrincipal:
			"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg",
	},
	atributos: {
		produtoNovo: false,
		produtoIndicado: true,
		emPromocao: true,
		compre1Leve2: true,
	},
};

// Sem destructuring:
const produtoIndicadoSemDestructuring = produto.atributos.produtoIndicado;
const atributosAdicionaisSemDestructuring = Object.keys(
	produto.atributos
).reduce((acc, currKey) => {
	if (currKey === "produtoIndicado") {
		return acc;
	}

	acc[currKey] = produto.atributos[currKey];
	return acc;
}, {});

// Inicie o destructuring na linha abaixo ->
const {
	atributos: { produtoIndicado, ...atributosAdicionais },
} = produto;
// <- Finalize o destructuring na linha acima

console.log(produtoIndicado);
console.log(atributosAdicionais);
