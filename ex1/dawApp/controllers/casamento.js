// Student controller

var Casamento = require('../models/casamento')

// Devolve lista dos casamentos
// module.exports.list = () => {
//     return Casamento
//         .find({},{date: 1, title:1, _id:1, href:1})
//         .exec()
// }


// module.exports.getNome = (nome) => {
//     return Casamento
//         .find({"title" : {$regex : ".*" + nome + ".*"}})
//         .exec();
// }

// module.exports.lookUp = id => {
//     return Casamento
//         .findOne({'_id': id})
//         .exec()
// }

// module.exports.getAno = (ano) => {
//     return Casamento
//         .find({"date" : {$regex : ".*" + ano + ".*"}})
//         .exec();
// }

// module.exports.listaNoivos = () => {
//     return Casamento
//         .find({'_id':1, title:1})
//         .exec()
// }


// module.exports.groupAno = () => {
//     return Casamento
//             .aggregate([
//             {
//                 "$group" : {
//                     "_id" : {date: "$date"},
//                     casamentos: {$push: {title: "$title", id: "$ref"}}
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
