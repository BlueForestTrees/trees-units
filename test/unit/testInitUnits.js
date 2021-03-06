const chai = require('chai')
const unitManip = require("../../src/index")
const mock = require("../grandeurServiceMock")
const Fraction = require("fraction.js")
chai.should()

beforeEach(function () {
    return mock.mockGrandeurs()
})

describe('TU Init', function () {
    describe('long tests', function () {
        it('multiply', function () {
            (Fraction(1).mul(410.144927536).mul(2.07)).valueOf().should.equal(849);
            (0.23923445 * 3600 * 1000).should.equal(861244.02);

            (Fraction(1, 2).mul(Fraction(1, 2))).valueOf().should.equal(0.25);

            Fraction(0.1).mul(0.2).valueOf().should.equal(0.02);
        })
    })
    it('getShortnames ok', async function () {
        unitManip.getShortnames().should.deep.equal([
            "μmol",
            "mmol",
            "mol",
            "sec",
            "min",
            "h",
            "j",
            "mois",
            "an",
            "J",
            "ws",
            "cal",
            "wh",
            "kcal",
            "kWh",
            "Mcal",
            "mm",
            "cm",
            "m",
            "km",
            "mg",
            "g",
            "kg",
            "t",
            "Mt",
            "Nomb",
            "Item(s)",
            "€",
            "k€",
            "m€",
            "M€",
            "$",
            "k$",
            "M$",
            "m$",
            "m2",
            "hec",
            "kg*km",
            "t*km",
            "mL",
            "cL",
            "dL",
            "L",
            "m3",
            "goutte"
        ])
    })

    it('getGrandeursKeys', async function () {
        unitManip.getGrandeursKeys().should.deep.equal([
            "Dens",
            "Duré",
            "Ener",
            "Long",
            "Mass",
            "Nomb",
            "Pri1",
            "Pri2",
            "Surf",
            "Tran",
            "Volu"
        ])
    })

    it('getGrandeur ok', function () {
        unitManip.getGrandeur("Dens").should.deep.equal({
            "key": "Dens",
            "label": "Densité (mol, mmol...)",
            "units": [
                {
                    "coef": 0.000001,
                    "grandeur": "Dens",
                    "name": "micro-mole",
                    "shortname": "μmol"
                },
                {
                    "coef": 0.001,
                    "grandeur": "Dens",
                    "name": "milli-mole",
                    "shortname": "mmol"
                },
                {
                    "coef": 1,
                    "grandeur": "Dens",
                    "name": "mole",
                    "shortname": "mol"
                }
            ]
        })
    })
    it('getGrandeur null', function () {
        (!unitManip.getGrandeur("sdlfgij")).should.be.true
    })

    it('getUnits', async function () {
        unitManip.getUnits().should.deep.equal({
            "$": {
                "coef": 1,
                "grandeur": "Pri2",
                "name": "dollar",
                "shortname": "$"
            },
            "J": {
                "coef": 0.23923445,
                "grandeur": "Ener",
                "name": "joule",
                "shortname": "J",
            },
            "L": {
                "coef": 0.001,
                "grandeur": "Volu",
                "name": "Litre",
                "shortname": "L",
            },
            "M$": {
                "coef": 1000000,
                "grandeur": "Pri2",
                "name": "Milliard de dollars",
                "shortname": "M$"
            },
            "Mcal": {
                "coef": 1000000,
                "grandeur": "Ener",
                "name": "mega-calorie",
                "shortname": "Mcal",
            },
            "Mt": {
                "coef": 1000000000,
                "grandeur": "Mass",
                "name": "mega-tonne",
                "shortname": "Mt",
            },
            "an": {
                "coef": 11041920000,
                "grandeur": "Duré",
                "name": "année",
                "shortname": "an",
            },
            "cL": {
                "coef": 0.00001,
                "grandeur": "Volu",
                "name": "Centi-litre",
                "shortname": "cL",
            },
            "M€": {
                "coef": 1000000000,
                "grandeur": "Pri1",
                "name": "milliard d'euros",
                "shortname": "M€"
            },
            "Nomb": {
                "coef": 1,
                "grandeur": "Nomb",
                "name": "pas d'unité",
                "shortname": "Nomb"
            },
            "Item(s)": {
                "coef": 1,
                "grandeur": "Nomb",
                "name": "items",
                "shortname": "Item(s)"
            },
            "cal": {
                "coef": 1,
                "grandeur": "Ener",
                "name": "calorie",
                "shortname": "cal",
            },
            "cm": {
                "coef": 0.01,
                "grandeur": "Long",
                "name": "centimètre",
                "shortname": "cm",
            },
            "dL": {
                "coef": 0.0001,
                "grandeur": "Volu",
                "name": "Déci-litre",
                "shortname": "dL",
            },
            "g": {
                "coef": 1,
                "grandeur": "Mass",
                "name": "gramme",
                "shortname": "g",
            },
            "goutte": {
                "coef": 20,
                "grandeur": "Volu",
                "name": "Goutte",
                "shortname": "goutte",
            },
            "h": {
                "coef": 3600,
                "grandeur": "Duré",
                "name": "heure",
                "shortname": "h",
            },
            "hec": {
                "coef": 10000,
                "grandeur": "Surf",
                "name": "hectare",
                "shortname": "hec",
            },
            "j": {
                "coef": 86400,
                "grandeur": "Duré",
                "name": "jour",
                "shortname": "j",
            },
            "kcal": {
                "coef": 1000,
                "grandeur": "Ener",
                "name": "kilo-calorie",
                "shortname": "kcal",
            },
            "kg*km": {
                "coef": 0.001,
                "grandeur": "Tran",
                "name": "Kilogramme Kilomètre",
                "shortname": "kg*km",
            },
            "kg": {
                "coef": 1000,
                "grandeur": "Mass",
                "name": "kilogramme",
                "shortname": "kg",
            },
            "km": {
                "coef": 1000,
                "grandeur": "Long",
                "name": "kilomètre",
                "shortname": "km",
            },
            "k$": {
                "coef": 1000,
                "grandeur": "Pri2",
                "name": "Kilo-dollar",
                "shortname": "k$"
            },
            "kWh": {
                "coef": 861244.02,
                "grandeur": "Ener",
                "name": "Watt-Heure",
                "shortname": "kWh",
            },
            "k€": {
                "coef": 1000,
                "grandeur": "Pri1",
                "name": "Kilo-euro",
                "shortname": "k€"
            },
            "m": {
                "coef": 1,
                "grandeur": "Long",
                "name": "mètre",
                "shortname": "m",
            },
            "m$": {
                "coef": 1000000,
                "grandeur": "Pri2",
                "name": "Million de dollars",
                "shortname": "m$"
            },
            "m2": {
                "coef": 1,
                "grandeur": "Surf",
                "name": "mètre-carré",
                "shortname": "m2",
            },
            "m3": {
                "coef": 1,
                "grandeur": "Volu",
                "name": "Mètre-cube",
                "shortname": "m3",
            },
            "mL": {
                "coef": 0.000001,
                "grandeur": "Volu",
                "name": "Milli-litre",
                "shortname": "mL",
            },
            "mg": {
                "coef": 0.001,
                "grandeur": "Mass",
                "name": "milligramme",
                "shortname": "mg",
            },
            "min": {
                "coef": 60,
                "grandeur": "Duré",
                "name": "minute",
                "shortname": "min",
            },
            "mm": {
                "coef": 0.001,
                "grandeur": "Long",
                "name": "millimètre",
                "shortname": "mm",
            },
            "mmol": {
                "coef": 0.001,
                "grandeur": "Dens",
                "name": "milli-mole",
                "shortname": "mmol",
            },
            "mois": {
                "coef": 920160000,
                "grandeur": "Duré",
                "name": "mois",
                "shortname": "mois",
            },
            "mol": {
                "coef": 1,
                "grandeur": "Dens",
                "name": "mole",
                "shortname": "mol",
            },
            "m€": {
                "coef": 1000000,
                "grandeur": "Pri1",
                "name": "million d'euros",
                "shortname": "m€"
            },
            "sec": {
                "coef": 1,
                "grandeur": "Duré",
                "name": "seconde",
                "shortname": "sec",
            },
            "t": {
                "coef": 1000000,
                "grandeur": "Mass",
                "name": "tonne",
                "shortname": "t",
            },
            "t*km": {
                "coef": 1,
                "grandeur": "Tran",
                "name": "Tonne Kilomètre",
                "shortname": "t*km"
            },
            "wh": {
                "coef": 861.24402,
                "grandeur": "Ener",
                "name": "Watt-Heure",
                "shortname": "wh",
            },
            "ws": {
                "coef": 0.23923445,
                "grandeur": "Ener",
                "name": "Watt-Seconde",
                "shortname": "ws",
            },
            "μmol": {
                "coef": 0.000001,
                "grandeur": "Dens",
                "name": "micro-mole",
                "shortname": "μmol",
            },
            "€": {
                "coef": 1,
                "grandeur": "Pri1",
                "name": "euo",
                "shortname": "€",
            },
        })
    })

    it('getGrandeurs', function () {
        unitManip.getGrandeurs()
            .map(function (g) {
                return g.key
            })
            .should.deep.equal(["Dens", "Duré", "Ener", "Long", "Mass", "Nomb", "Pri1", "Pri2", "Surf", "Tran", "Volu"])
    })

})