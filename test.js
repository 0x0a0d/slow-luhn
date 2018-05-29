const {assert} = require('chai');
const luhn = require('./index');

describe('slow-luhn', function() {
    it('getCheckDitgit', function () {
        const cases = [
            ['492984043879208', 6],
            ['418763822396018', 2],
            ['402400717266527', 4],
            ['491655083402253', 4],
            ['491675619872237', 5],
        ];
        cases.forEach(test => {
            let checkDigit = luhn(test[0], 1);
            assert(checkDigit == test[1], `checkDitgit=='${checkDigit}' must be ${test[1]}`);
        })

    });
    it('calculate - true', function () {
        const cases = [
            '4929840438792086',
            '4187638223960182',
            '4024007172665274',
            '4916550834022534',
            '4916756198722375',
        ];
        cases.forEach(test => {
            assert(luhn(test) === true, `luhn(${test}) must be true`);
        })

    });
    it('calculate - false', function () {
        const cases = [
            '4929840438792080',
            '4187638223960180',
            '4024007172665270',
            '4916550834022530',
            '4916756198722370',
        ];
        cases.forEach(test => {
            assert(luhn(test) === false, `luhn(${test}) must be false`);
        })

    });
});