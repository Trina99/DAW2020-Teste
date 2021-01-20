var express = require('express');
var router = express.Router();

var Casamento = require('../controllers/casamento')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/api/casamentos', function(req, res) {
//   if(req.query.nome){
//     Casamento.getNome(req.query.nome)
//     .then(data => res.json(data))
//       .catch(err => res.json({error: err}));
//   }
//   if(req.query.ano){
//     Casamento.getAno(req.query.ano)
//     .then(data => res.json(data))
//       .catch(err => res.json({error: err}));
//   }
//   if(req.query.byAno){
//     Casamento.groupAno()
//     .then(data => res.json(data))
//       .catch(err => res.json({error: err}));
//   }
//   else{
//   // Data retrieve
//       Casamento.list()
//       .then(data => res.json(data))
//       .catch(err => res.json({error: err}));
//   }
// });

// router.get('/api/casamentos/:id', function(req, res) {
//   // Data retrieve
//   Casamento.lookUp(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => res.json({error: err}))
//   ;
// });


// router.get('/api/casamentos/noivos', function(req, res) {
//   // Data retrieve
//   Casamento.lookUp(req.params.id)
//     .then(casamento => {
//       var res = []
//       casamentos.forEach(c => {
//         aux = c.title.split(':')
//         noivos = aux[1].split(/c.c./)
//         noivo = {nome: noivos[0], casamento: c.id}
//         noiva = {nome: noivos[1], casamento: c.id}
        
//         res.push(noivo)
//         res.push(noiva)
//       });
//       SpeechRecognitionResult.sort((a,b)=>{
//         if(a.nome < b.nome){return -1;}
//         if(a.nome > b.nome){return 1;}
//         return 0;
//       })
//       res.json(result)
//     })
//     .catch(err => res.json({error: err}))
//   ;
// });


module.exports = router;
