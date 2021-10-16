function townPopulation(input) {
    let towns = {};

    for (let tokens of input) {
        let [town, population] = tokens.split(' <-> ');
        population = Number(population);

        if (!towns.hasOwnProperty(town)) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

console.log();

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);