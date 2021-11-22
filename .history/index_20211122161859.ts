import { Layer, Network } from 'synaptic';

const inputLayer = new Layer(4);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const rede = new Network({
	input: inputLayer,
	output: outputLayer,
	hidden: [hiddenLayer],
});

const s = rede.standalone();

const learningRate = .3;

for (let i = 0; i < 2000; i++) {
	// 0 xor 0 => 0
	rede.activate([1, 3, 5, 7]);
	rede.propagate(learningRate, [1]);
	// 0 xor 1 => 1

}


console.log("==================")

console.log(s([2]))