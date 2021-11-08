require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food current release night purpose install canoe army ghost'; 
let testAccounts = [
"0x58223b39392a334a29aafdea092dc776e5c4317876f0f0981ee6b2ba3374736c",
"0x531b0ae2b8bec569b8d7aa7ff507d98192e6fde3a22afb80bb321e7805855599",
"0xb9fba2259a9a6ac1db173f405eded6d615fb0abd01ec6e3c34648280b9477450",
"0xf1d51d7a0f87751c72cd7d2fc66416d47be60eac655ca3ce8f3e4332035caed8",
"0x516c9ae68c04418d44a7f0259a5b9ae512e1edd1eeaf87808b85bd6b36d13c0a",
"0x54cd026685ee73d22438fd689667a57438216c7d4aca6f944c15d4d22a7f6166",
"0x4670a5874f80a842bf7d3f5b292856f28b9824a5950f5341cd485cb0abb987e1",
"0xc8965052ca5fa6309ceb814ba83af582fb2bcd68a269220b2e8963c858c5cb64",
"0x2c7cac065e3b51de5491f1da59628e9ff34ce3018fa07c9b77bd854e4dc4c052",
"0x482204acfc1a28cbafa2398790c106351dc48b581da447d839a893f823289d77"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


