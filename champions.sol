//SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Semifinal {

struct Partida {

string PrevisaoDoResultado;
bool ConfirmacaoDoResultado;


}

mapping(address => Partida) public partidas;

string public ResultadoAtual;


event ConfirmacaoDoResultado (string result);


function PrevisaoDoUser(string memory PrevisaoDoResultado) public {
partidas[msg.sender] = Partida(PrevisaoDoResultado, false);     

}

function Registra (string memory result) public {
ResultadoAtual = result;
emit ConfirmacaoDoResultado(result);

}
 
function Checar() public view returns (bool) {
 return keccak256(abi.encodePacked(partidas[msg.sender].PrevisaoDoResultado)) == keccak256(abi.encodePacked(ResultadoAtual));   
}

}