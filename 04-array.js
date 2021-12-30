// Proposta
// Em um sistema de e-commerce, na página de produto,
// você precisa capturar as fotos do produto de maneira separada:
// primeiro, guarda a primeira foto em uma variável isolada,
// para usar como principal. Depois, as demais fotos,
// vão ser listadas embaixo como miniaturas usando um loop for.

const produto = {
	id: 2000,
	nome: "Sabão em pó",
	preco: 12.29,
	fotos: [
		"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg",
		"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg",
		"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg",
		"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/6fc0c00f6fda35efb901adacce47713b.jpg",
	],
};

const fotos = produto.fotos;

// Sem destructuring:
const fotoPrincipalSemDestructuring = fotos[0];
const demaisFotosSemDestructuring = fotos.filter((item, index) => index > 0);

// Inicie o destructuring na linha abaixo ->
const [fotoPrincipal, ...demaisFotos] = fotos;
// <- Finalize o destructuring na linha acima

console.log("foto principal:", fotoPrincipal);
console.log("demais fotos:");
for (let i = 0; i < demaisFotos.length; i++) {
	console.log(demaisFotos[i]);
}
