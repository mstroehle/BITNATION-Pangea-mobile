// @flow
import ethers from 'ethers';


export default class EthereumService {

  static async initializeWallet(privateKey: string) {
    this.wallet = new ethers.Wallet('0x0123456789012345678901234567890123456789012345678901234567890123');
    this.wallet.provider = ethers.providers.getDefaultProvider();
  }

  static async sendMoney(fromAddress: string, toAddress: string, amount: string): Promise<void> {
    console.log('Send Money called!');

    const transaction = {
      gasLimit: 1000000,
      gasPrice: ethers.utils.bigNumberify('20000000000'),
      to: '0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290',
      data: '0x',
      value: ethers.utils.parseEther('1.0'),
    };

    const gasEstimate = await this.wallet.estimateGas(transaction);
    console.log('estimated gas: ', gasEstimate);

    return this.wallet.send(transaction);
  }
}