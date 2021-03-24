function database() {
    const tables = {
        creatures: [
            {
                name: 'zumbie',
                rank: 'D++',
                align: 'dark'
            },
            {
                name: 'boar',
                rank: 'D--',
                align: 'neutral'
            },
            {
                name: 'dragon',
                rank: 'A++',
                align: 'neutral'
            },
            {
                name: 'angel',
                rank: 'A+',
                align: 'ligth'
            }
        ],
        places: {

        }
    }

    return {
        get: (table, id) => {
            return tables[table][id];
        },
        all: (table) => {
            return tables[table];
        }
    }
}

const data = database();

const iterator = {
    [Symbol.iterator]: () => {
        let id = 0;
        return {
            next() {
                id++
                const creature = data.get('creatures', id);
                if (creature) {
                    return {value: creature, done: true}
                } else {
                    return {done: false}
                }
            }
        }
    }
}

for ( const creature of iterator) {
    console.log(creature)
}