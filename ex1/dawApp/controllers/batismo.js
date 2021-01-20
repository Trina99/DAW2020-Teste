// Student controller

var Batismo = require('../models/batismo')

// Devolve lista dos Batismos
module.exports.list = () => {
    return Batismo
        .find({},{date: 1, title:1, _id:1, ref:1})
        .exec()
}


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
