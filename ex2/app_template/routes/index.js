const express = require('express');
const axios = require('axios');

const router = express.Router();


API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjczNCwiZXhwIjoxNjExMTgxNTM0fQ.Yz6NCx_o5-nF8pdHUzgBYRHPLiXDHG-P4YlAad5fcvefB6RyBF6-CDEnUtOYeFgwV_ACiFLPSCTigpIa_7gEq-TXl5tx4DFsRpHY2o6k4xO7AYj8j1IesewpDcSbTfaVKDMGI-q9tAxAmOX9VW5ikpi17CKZde74yRPXfGWvo9aKofA51dWfdp8HSM8JY-j-lYABtfW1OhDLADFJLJXtuaDDxiaVX4d7j97xXac30S0QGyEgdKGSpJ5UN-RU7qP34nt89iNVrCMgeSCkKn3Iq2NUMOqmSyWZb6wA19yuLb-qlEIK90hjEUiubqqVIBBr77vabuKVClHR8KgtH7jTEA'
API_URL = 'http://clav-test.di.uminho.pt/v2'

// ========= FETCH TOKEN ========= //

axios.post(`${API_URL}/users/login`,{
    username: "daw2020@teste.uminho.pt",
    password: "232"
})
.then((api_res) => {
    console.log('Success',api_res.data.token);
    API_TOKEN = api_res.data.token;
})
.catch((err) => {
    // handle error
    console.log(err);
});

// ========= ROUTES ========= //

// home page
router.get('/', (req, res, next) => {
        // handle success''
        res.render('index');
    
});


// Classes
router.get('/classes', (req, res, next) => {
    axios.get(`${API_URL}/classes/?nivel=1&token=${API_TOKEN}`)
    .then((api_res) => {
        // handle success''
        res.render('classe', { "classe" : api_res.data, "token" : API_TOKEN });
    })
    .catch((err) => {
        // handle error
        res.render('error',{ "err" : err });
    });
});

// GET class/:id
router.get('/classes/:id', (req, res, next) => {
    axios.get(`${API_URL}/classes/c${req.params.id}?token=${API_TOKEN}`)
    .then((api_res) => {
        res.render('class', { "classe" : api_res.data , "token" : API_TOKEN });
    })
    .catch((err) => {
        // handle error
        res.render('error',{ "err" : err });
    });
});

// GET class/:id
router.get('/indices', (req, res, next) => {
    axios.get(`${API_URL}/termosIndice?token=${API_TOKEN}`)
    .then((api_res) => {
        res.render('indices', { "indice" : api_res.data , "token" : API_TOKEN });
    })
    .catch((err) => {
        // handle error
        res.render('error',{ "err" : err });
    });
});

// GET home page
// router.get('/', (req, res, next) => {
//     axios.get(`${API_URL}/classes/?nivel=1&token=${API_TOKEN}`)
//     .then((api_res) => {
//         // handle success''
//         res.render('table', { "data" : api_res.data, "token" : API_TOKEN });
//     })
//     .catch((err) => {
//         // handle error
//         res.render('error',{ "err" : err });
//     });
// });

// // GET home page
// router.get('/class/:id', (req, res, next) => {
//     axios.get(`${API_URL}/classes/${req.params.id}?token=${API_TOKEN}`)
//     .then((api_res) => {
//         res.render('class', { "data" : api_res.data , "token" : API_TOKEN });
//     })
//     .catch((err) => {
//         // handle error
//         res.render('error',{ "err" : err });
//     });
// });

// GET topologias
// router.get('/tipologia/:id', (req, res, next) => {
//     axios.get(`${API_URL}/tipologias/${req.params.id}?token=${API_TOKEN}`)
//     .then((api_res1) => {
//         axios.get(`${API_URL}/tipologias/${req.params.id}/elementos?token=${API_TOKEN}`)
//         .then((api_res2) => {
//             axios.get(`${API_URL}/tipologias/${req.params.id}/intervencao/dono?token=${API_TOKEN}`)
//             .then((api_res3) => {
//                 axios.get(`${API_URL}/tipologias/${req.params.id}/intervencao/participante?token=${API_TOKEN}`)
//                 .then((api_res4) => {

//         res.render('tipologia', { "tipologia" : api_res1.data , "entidade" : api_res2.data, "dono" : api_res3.data, "participante": api_res4.data, "token" : API_TOKEN });
//     })})})})
//     .catch((err) => {
//         // handle error
//         res.render('error',{ "err" : err });
//     });
// });

// var path = require('path')
// /* GET page by id. */
// router.get('/:id', (req, res, next) => {
//     if (path.length == 0) path = "/" + req.params.id
//     axios.get(`${API_URL}/classes/${req.params.id}?nivel=1&token=${API_TOKEN}`)
//         .then(result => {
//             if (result.data.nivel == 3){
//                 res.render('classe3', { 
//                     classe: result.data,
//                     path: path
//                     })
//             }
//             else{
//                 res.render('classe', { 
//                     classe: result.data,
//                     path: path
//                 })
//             }
//             path = "/" + req.params.id
//         })
//         .catch(error => {
//             res.render('error', { error: error })
//         });
// });

module.exports = router;
