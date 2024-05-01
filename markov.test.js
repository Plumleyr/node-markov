const MarkovMachine = require("./markov")
describe("makeChains", function(){

    test("check that chains are made", function(){
        let mm1 = new MarkovMachine("the chicken ate the apple and fell out of the apple tree")
        expect(mm1.chains.apple[0]).toEqual(expect.any(String))
    })
    
    test("check that correct chains are made", function(){
        let mm2 = new MarkovMachine("chicken banana chicken apple chicken tomato")
        expect(mm2.chains.chicken[2]).toBe('tomato')
    })

})

describe("makeText", function(){
    let mm;

    beforeAll(function(){
        mm = new MarkovMachine("the elephant fell on another elephant and that elephant fell")
    })

    test("there is an output of text", () => {
        let string1 = mm.makeText()
        expect(string1).toEqual(expect.any(String))
    })

    test("output is only a string", () => {
        let string2 = mm.makeText()
        expect(string2).not.toEqual(expect.any(Number))
    })
    
})