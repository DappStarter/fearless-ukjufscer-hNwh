require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind pulp heavy private orphan short'; 
let testAccounts = [
"0xf2e706b528b5d1c255f5631e8d3c0c2b66394a1d012204cd603d0b739a3fafb8",
"0x8031ef7f3c1f2d3652f055162b9c19e51583c0412f1189e84663ef6cd1c4f61d",
"0xa9f89c549cf6bd855c844bd68c6547f276eb1f54ff0d19d9ce8f51f76abc2a4a",
"0xbab624b6d772b1ac57a3cca0524b482e46d8fc73b6009ca9e58129c4fbf3d00d",
"0xa3543247378c2b8fdf6b7ee01b8f78ec3abd877a6be1a4adf7e138d5bb769974",
"0x29464c08eaa5b51cd52d36526242c484d02b9446f81c55c20ab664840407ad84",
"0x073a78a8674a964982a4309e90961a3f89788e56d5a7e0b1919425a713c72ba0",
"0x9733c494ab4075c4533bc7a1f8a59b5b0239654aa7cba33545d1e2cde227f9f8",
"0xb6aaacdc61cb64d4e82e63fe5d23bde3dcfe0e21f3d2e4a7a40a6320d409f6ae",
"0xd2a9ce6a1a10f4696e12bdfa38cd7d7b66b92da59f93d3c8b67d67906c1bc1a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

