function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        i = i.toString();
        
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }

        console.log(sum === 5 || sum === 7 || sum === 11 ? `${i} -> True` : `${i} -> False`);
    }
}