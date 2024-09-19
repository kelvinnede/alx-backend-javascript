// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when adding 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 0 when adding 0 and 0', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when subtracting 1.4 from 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 0 when subtracting 0 from 0', () => {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when dividing 1.4 by 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return 1 when dividing 4 by 4', () => {
            expect(calculateNumber('DIVIDE', 4, 4)).to.equal(1);
        });
    });
});
