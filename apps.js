const aa = [2,3,[
 10,20
]]
let mobiles = [

    ['Iphone', [
        '13 Pro',
        'Ram: 4',
        'Rom: 32',
        'Price: 1200',

    ]],
    ['Tecno', [
        'Spark 8',
        'Ram: 4',
        'Rom: 32',
        'Price: 1200',

    ]],
    ['Infinix', [
        'Note 10',
        'Ram: 4',
        'Rom: 32',
        'Price: 1200',

    ]],
    ['Redmi', [
        '10 A',
        'Ram: 4',
        'Rom: 32',
        'Price: 1200',

    ]],


];

let b = [...mobiles]

const a = [b[3][1][3]]

console.log(a);















let mobilesobj = {

    Iphone: {
        IphoneX: {

            Ram: "3 ",
            Rom: "64 ",
            Price: "Rs:12000",
        },
        Iphone12: {

            Ram: "4 ",
            Rom: "128 ",
            Price: "Rs:12000",
        },
        Iphone13: {

            Ram: "4 ",
            Rom: "128 ",
            Price: "Rs:12000",
        },
    },
    Samsung: {
        Note5: {

            Ram: "4 ",
            Rom: "32 ",
            Price: "Rs:12000",
        },
        Note8: {

            Ram: "6 ",
            Rom: "64 ",
            Price: "Rs:12000",
        },
        S22: {

            Ram: "8 ",
            Rom: "128 ",
            Price: "Rs:12000",
        },
    },
    Tecno: {
        Spark9: {

            Ram: "4 ",
            Rom: "32 ",
            Price: "Rs:12000",
        },
        Cammon17: {

            Ram: "6 ",
            Rom: "64 ",
            Price: "Rs:12000",
        },
        Cammon15: {

            Ram: "8 ",
            Rom: "128 ",
            Price: "Rs:12000",
        },
    },
    Infinix: {
        Note9: {

            Ram: "4 ",
            Rom: "32 ",
            Price: "Rs:12000",
        },
        hot11: {

            Ram: "6 ",
            Rom: "64 ",
            Price: "Rs:12000",
        },
        Note10: {
            Ram: "8 ",
            Rom: "128 ",
            Price: "Rs:12000",
        },
    },
}


let d = {...mobilesobj.Infinix.Note10};

console.log(d.Price);

