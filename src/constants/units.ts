// standard number representation
interface NumberRepresentation {
    abbr: string;
    value: any;
}

export const units: { [key: string]: NumberRepresentation } = {
    "zero": {
        "abbr": "",
        "value": 0
    }
    ,
    "hundred": {
        "abbr": "",
        "value": 100
    },
    "thousand": {
        "abbr": "K",
        "value": 1000
    },
    "million": {
        "abbr": "M",
        "value": 1000000
    },
    "billion": {
        "abbr": "B",
        "value": BigInt("1000000000")
    },
    "trillion": {
        "abbr": "T",
        "value": BigInt("1000000000000")
    },
    "quadrillion": {
        "abbr": "Q",
        "value": BigInt("1000000000000000")
    },
    "quintillion": {
        "abbr": "Qt",
        "value": BigInt("1000000000000000000")
    },
    "sextillion": {
        "abbr": "St",
        "value": BigInt("1000000000000000000000")
    },
    "septillion": {
        "abbr": "Sp",
        "value": BigInt("1000000000000000000000000")
    },
    "octillion": {
        "abbr": "O",
        "value": BigInt("1000000000000000000000000000")
    },
    "nonillion": {
        "abbr": "N",
        "value": BigInt("1000000000000000000000000000000")
    },
    "decillion": {
        "abbr": "D",
        "value": BigInt("1000000000000000000000000000000000")
    },
    "undecillion": {
        "abbr": "UD",
        "value": BigInt("1000000000000000000000000000000000000")
    }
};