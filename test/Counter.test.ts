import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Counter } from '../typechain-types';

describe('Counter', async () => {
  let counter: Counter;
  beforeEach(async () => {
    const Counter = await ethers.getContractFactory('Counter');
    counter = await Counter.deploy('My Counter', 1);
    console.log('Reset');
  });
  describe('Deploy', () => {
    it('initial count to 0', async () => {
      expect(await counter.getCount()).equal(1);
    });
    it('initial name to My Counter', async () => {
      expect(await counter.getName()).equal('My Counter');
    });
  });

  describe('Counting', () => {
    let transation;
    it('increments count', async () => {
      transation = await counter.increment();
      await transation.wait();
      expect(await counter.getCount()).equal(2);
      transation = await counter.increment();
      await transation.wait();
      expect(await counter.getCount()).equal(3);
    });
    it('decrements count', async () => {
      transation = await counter.decrement();
      await transation.wait();
      expect(await counter.getCount()).equal(0);
      const invoked = counter.decrement();
      expect(invoked).to.be.revertedWith('can not set count less than 0');
    });
  });
});
