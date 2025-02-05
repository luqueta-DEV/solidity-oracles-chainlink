# 📌 Football Match Events - Solidity & Web3.js

## 📖 Visão Geral
Este projeto é uma API desenvolvida em JavaScript que interage com um contrato inteligente Solidity. O contrato gerencia eventos de uma partida de futebol, registrando os vencedores das partidas, no caso estamos na semifinal da champions! Usamos a biblioteca da chainlink pra ajudar neste projeto de APIS externas em tempo real
## 🏗 Estrutura do Projeto

```
📂 solidity-oracles-chainlink/
 ├── 📜 champions.sol   # Contrato Solidity para eventos da partida (Real Madrid x City)
 ├── 📜 footbal.js      # API Node.js para registro das equipes
 ├── 📜 web3.js        # Conexão Web3 e ABI para interagir com o contrato
```

## 🔥 Funcionalidades

- Registra eventos do jogo 
- Utiliza Web3.js para interação com a blockchain.
- Implementado em Solidity para segurança e transparência.

## 📝 Instalação e Uso

### 📌 Pré-requisitos
- Node.js instalado
- Ganache (ou outro nó Ethereum local/testnet)
- Metamask configurado

### 🚀 Passos

1. Clone o repositório:
   ```sh
   git clone https:/github/luqueta-DEV/solidity-oracle-chainlink.git
   cd projeto-root
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Compile e implante o contrato:
   ```sh
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. Execute a API:
   ```sh
   node footbal.js
   ```

## 📂 Explicação dos Arquivos

### `champions.sol` (Contrato Solidity)
Gerencia os eventos da partida entre Real Madrid x Manchester City, dizendo o vencedor

### `footbal.js` (API Node.js)
- Conecta-se ao contrato.
- Permite registrar equipes e eventos.
- Servidor básico para comunicação com o frontend.

### `web3.js` (Conexão Web3)
- Contém a ABI do contrato.
- Realiza verificações e chamadas na blockchain.
- Facilita a interação entre o frontend e o contrato.
