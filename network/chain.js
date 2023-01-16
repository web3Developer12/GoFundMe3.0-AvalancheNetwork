import { InjectedConnector } from "@web3-react/injected-connector"

const AVALANCHE_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Avalanche Testnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
}

export async function addAvalancheNetwork() {
  const params = [AVALANCHE_TESTNET_PARAMS]
  await window.ethereum.request({ method: 'wallet_addEthereumChain', params })
  .then(() => true)
  .catch((error) => false)
}