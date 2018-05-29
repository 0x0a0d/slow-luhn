module.exports = (card, find_check_digit = false) => {
    card = card.toString().replace(/\D/g, '').split('');
    if (find_check_digit) card.push('0');
    const sum = card.reverse().reduce((s,v,i)=>s+=i%2==0?+v:v*2>9?(v*2-9):v*2, 0);
    if (find_check_digit) return 9 * sum % 10;
    else return sum % 10 === 0;
}