// Student controller

var Batismo = require('../models/batismo')

// Devolve lista dos Batismos
module.exports.list = () => {
    return Batismo
        .find({},{date: 1, title:1, _id:1, ref:1})
        .exec()
}


// module.exports.getNome = (nome) => {
//     return Batismo
//         .find({"title" : {$regex : ".*" + nome + ".*"}})
//         .exec();
// }

module.exports.lookUp = id => {
    return Batismo
        .findOne({'_id': id})
        .exec()
}

module.exports.batisados = () => {
    return Batismo
        .find({},{title: 1})
        .exec()
}

module.exports.progenitores = id => {
    return Batismo
        .find({},{_id: 1, pai: 1, mae: 1})
        .exec()
}

module.exports.stats = () => {
        return Batismo
        .aggregate([
        {
            "$group" : {
                "_id" : {date: { $substr: [ "$date", 0, 4 ] }},
                count: { $sum: 1 }
            }
        }
    ])
  
    }

module.exports.getAno = (ano) => {
    return Batismo
        .find({"date" : {$regex : ".*" + ano + ".*"}},{_id:0, title:1})
        .exec();
}

// module.exports.listaNoivos = () => {
//     return Batismo
//         .find({'_id':1, title:1})
//         .exec()
// }


// module.exports.groupAno = () => {
//     return Batismo
//             .aggregate([
//             {
//                 "$group" : {
//                     "_id" : {date: "$date"},
//                     Batismos: {$push: {title: "$title", id: "$ref"}}
//                 }
//             }
//       ])
// }

// module.exports.groupAtor = () => {
//     return Filme
//     .aggregate([{ $unwind : "$cast" },{"$group":{"_id" : "$cast",filmes:{$push:{title: "$title",id: "$id"}}}}])

// }

// module.exports.groupGenero = () => {
//     return Filme
//     .aggregate([{ $unwind : "$genres" },{"$group":{"_id" : "$genres",filmes:{$push:{title: "$title",id: "$id"}}}}])

// }

// module.exports.groupAno = () => {
//         return Filme
//                 .aggregate([
//                 {
//                     "$group" : {
//                         "_id": {year: "$year"},
//                         filmes: {$push: {title: "$title", id: "$id"}}
//                 }
//             }
//         ])
// }

// module.exports.listaAtores = () => {
//     return Filme
//         .distinct("cast")
//         .sort()
//         .exec()
// }

// module.exports.nrAtores = () => {
//     return Filme
//         .find({},{id:1, _id:0, title:1,
//             nrAtores: {
//             $cond: {
//                 if: { $isArray: "$cast"},
//                 then: { $size: "$cast"},
//                 else: 0
//             }
//         }})
//         .exec()
// }

                // Batismos: {$push: {title: "$title", id: "$ref"}}

                // count: { $sum: 1 }
                // nrAtores: {
                    //             $cond: {
                    //                 if: { $isArray: "$cast"},
                    //                 then: { $size: "$cast"},
                    //                 else: 0
                    //             }
                    //         }})