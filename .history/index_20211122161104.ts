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

for (let i = 0; i < 2000; i++) {
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

const s = rede.standalone();

console.log("==================")

console.log(s([1, 0]))