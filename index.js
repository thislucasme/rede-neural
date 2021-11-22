"use strict";
exports.__esModule = true;
var synaptic_1 = require("synaptic");
var inputLayer = new synaptic_1.Layer(2);
var hiddenLayer = new synaptic_1.Layer(3);
var outputLayer = new synaptic_1.Layer(1);
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
var rede = new synaptic_1.Network({
    input: inputLayer,
    output: outputLayer,
    hidden: [hiddenLayer]
});
var learningRate = .3;
console.log("Treinando a rede...");
for (var i = 0; i < 100000; i++) {
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
var round = function (num, casas) {
    return +(parseFloat(num).toFixed(casas));
};
var standalone = rede.standalone();
console.log("usando a rede...");
var temp = standalone([1, 1]);
console.log("[1, 1] " + temp + " ".concat(round(temp[0] * 100, 1), " %"));
temp = standalone([1, 0]);
console.log("[1, 0] " + temp + " ".concat(round(temp[0] * 100, 1), " %"));
temp = standalone([0, 1]);
console.log("[0, 1] " + temp + " ".concat(round(temp[0] * 100, 1), " %"));
temp = standalone([0, 0]);
console.log("[0, 0] " + temp[0] + " ".concat(round(temp[0] * 100, 1), " %"));
