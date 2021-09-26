/**
 * Generates a "pseudo" random string of the specified length.
 * Note: This implementation uses `Math.random` under the hood.
 *
 * @param {number} [length=16] - The maximum characters to generate
 * @returns {string}
 *
 * @example
 * ```js
 * strRandom(); // Randomly generates a string similar to 'dabFOpWqY8utbKz9'
 * strRandom(20); // Randomly generates a string similar to 'trUmxY0iWjrhu1IKmkcT'
 * ```
 */
export default function strRandom(length = 16): string {
    // if (typeof window !== 'undefined' && !window.crypto?.getRandomValues) {
    //     return strPseudoRandom(length);
    // }

    // return strCryptoRandom(length);

    return strPseudoRandom(length);
}

/**
 * Generates a "pseudo" random string.
 */
function strPseudoRandom(length = 16): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    let value = '';

    for (let i = 0; i < length; i++) {
        value += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return value;
}

// /*
//  * Attempt at generating a more truly "random" alpha-numeric strings.
//  *
//  * @see https://stackoverflow.com/a/27747377
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
//  */

// /**
//  * Generate a more truly "random" alpha-numeric string when possible.
//  */
// function strCryptoRandom(length = 16): string {
//     if (typeof window === 'undefined') {
//         return require('crypto') // eslint-disable-line @typescript-eslint/no-var-requires
//             .randomBytes(length / 2)
//             .toString('hex');
//     }

//     const dec2hex = (value: number): string => value.toString(16).padStart(2, '0');

//     const buffer = new Uint8Array(length / 2);

//     window.crypto.getRandomValues(buffer);

//     return Array.from(buffer, dec2hex).join('').padEnd(length, '0');
// }

/*
    ##### Quick benchmark :

function cryptoRandom(length = 16) {
    const dec2hex = (value) => value.toString(16).padStart(2, '0');

    const buffer = new Uint8Array(length / 2);

    window.crypto.getRandomValues(buffer);

    return Array.from(buffer, dec2hex).join('').padEnd(length, '0');
}

function pseudoRandom(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    let value = '';

    for (let i = 0; i < length; i++) {
        value += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return value;
}

const recorder = () => ({
    crypto: {
        start: 0,
        end: 0,
        get duration() {
            return this.end - this.start;
        },
    },
    pseudo: {
        start: 0,
        end: 0,
        get duration() {
            return this.end - this.start;
        },
    },
    start(type) {
        this[type].start = performance.now();
    },
    end(type) {
        this[type].end = performance.now();
    },
    compare() {
        return {
            fastest: this.crypto.duration <= this.pseudo.duration ? 'crypto' : 'pseudo',
            diff:
                this.crypto.duration <= this.pseudo.duration
                    ? this.pseudo.duration - this.crypto.duration
                    : this.crypto.duration - this.pseudo.duration,
        };
    },
});

const loop = (times, length, closure) => {
    for (let index = 0; index < times; index++) {
        closure(length);
    }
};

const bench = (times, length) => {
    const record = recorder();

    record.start('crypto');
    loop(times, length, cryptoRandom);
    record.end('crypto');

    record.start('pseudo');
    loop(times, length, pseudoRandom);
    record.end('pseudo');

    return {
        crypto: record.crypto,
        pseudo: record.pseudo,
        compared: record.compare(),
    };
};

console.log({
    'times:short | length:short': bench(100, 10),
    'times:short | length:long': bench(100, 1000),
    'times:long  | length:short': bench(1000000, 10),
    'times:long  | length:long': bench(1000000, 1000),
});


    ##### Results:

{
    "times:short | length:short": {
        "crypto": {
            "start": 5444224.900000036,
            "end": 5444225.400000036,
            "duration": 0.5
        },
        "pseudo": {
            "start": 5444225.400000036,
            "end": 5444225.700000048,
            "duration": 0.30000001192092896
        },
        "compared": {
            "fastest": "pseudo",
            "diff": 0.19999998807907104
        }
    },
    "times:short | length:long": {
        "crypto": {
            "start": 5444225.700000048,
            "end": 5444235.800000012,
            "duration": 10.099999964237213
        },
        "pseudo": {
            "start": 5444235.800000012,
            "end": 5444242.400000036,
            "duration": 6.600000023841858
        },
        "compared": {
            "fastest": "pseudo",
            "diff": 3.4999999403953552
        }
    },
    "times:long  | length:short": {
        "crypto": {
            "start": 5444242.400000036,
            "end": 5447393.600000024,
            "duration": 3151.199999988079
        },
        "pseudo": {
            "start": 5447393.600000024,
            "end": 5447631.100000024,
            "duration": 237.5
        },
        "compared": {
            "fastest": "pseudo",
            "diff": 2913.699999988079
        }
    },
    "times:long  | length:long": {
        "crypto": {
            "start": 5447631.200000048,
            "end": 5498729.600000024,
            "duration": 51098.39999997616
        },
        "pseudo": {
            "start": 5498729.600000024,
            "end": 5516390.600000024,
            "duration": 17661
        },
        "compared": {
            "fastest": "pseudo",
            "diff": 33437.39999997616
        }
    }
}

 */
