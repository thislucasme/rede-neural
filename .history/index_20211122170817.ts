import { Layer, Network } from 'synaptic';

const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const rede = new Network({
	input: inputLayer,
	output: outputLayer,
	hidden: [hiddenLayer],
});

const learningRate = .3;
console.log("Treinando a rede...")
for (let i = 0; i < 100000; i++) {
	// 0 xor 0 => 0
	rede.activate([0, 0]);
	rede.propagate(learningRate, [0]);
	// 0 xor 1 => 1
	rede.activate([0, 1]);
	rede.propagate(learningRate, [1]);
	// 1 xor 0 => 1
	rede.activate([1, 0]);
	rede.propagate(learningRate, [1]);
	// 1 xor 1 => 0
	rede.activate([1, 1]);
	rede.propagate(learningRate, [0]);
}

const round = (num, casas) => {
	return +(parseFloat(num).toFixed(casas));
}

const standalone = rede.standalone();
console.log("usando a rede...");
let temp = standalone([1, 1])
console.log("[1, 1] " + temp + ` ${round(temp[0] * 100, 1)} %`)
temp = standalone([1, 0]);
console.log("[1, 0] " + temp + ` ${round(temp[0] * 100, 1)} %`)
temp = standalone([0, 1])
console.log("[0, 1] " + temp + ` ${round(temp[0] * 100, 1)} %`)
temp = standalone([0, 0])
console.log("[0, 0] " + temp[0] + ` ${round(temp[0] * 100, 1)} %`)

