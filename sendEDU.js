import { ethers } from 'ethers';
import { chainConfig } from './config.js';

export async function sendEDU(privateKey, toAddress, amount) {
    const provider = new ethers.JsonRpcProvider(chainConfig.rpcTarget);
    const wallet = new ethers.Wallet(privateKey, provider);
    const amountInWei = ethers.parseUnits(amount.toString(), "ether");

    const tx = {
        to: toAddress,
        value: amountInWei,
        chainId: parseInt(chainConfig.chainId, 16),
    };

    const transaction = await wallet.sendTransaction(tx);
    await transaction.wait();

    console.log(`Transaction successful with hash: ${transaction.hash}`);
    return transaction.hash;
}
