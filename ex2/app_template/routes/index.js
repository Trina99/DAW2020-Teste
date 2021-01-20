const express = require('express');
const axios = require('axios');

const router = express.Router();


API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4MzYyOSwiZXhwIjoxNjExMDEyNDI5fQ.cb6ECaxgdfoCXohjdCph6gxvZTFqN4_SCzP6H4OQV6MvoVvUywhel6PPsZFKra-r9ycV2C8MI6JHWtxPjs_wIPydbbbznZb2Tx-oP37Pg4pVwhn0ds74wexRCF08FjBgeVdjoc_aYPMvFM3F9K0zn9AdM4mHu0O1tJUnQ9UIHZfX_GtxN1NZFmrjRZnd4ZOahbcKw1ODyh4u2ofs4H8eNc3IGwZUtWJaou7LZTrSNU27RnKv6D8f3lIYZJX7DT8XV2XRJwk561zxy_2qOZ7yz5uA1qO4_f54a4gyd2tYcMJMg7w-iCDJGb9lDi0gQgtVPQRB7Oq_INLuCpBxIKxLeA'
API_URL = 'http://clav-test.di.uminho.pt/v2'

// ========= FETCH TOKEN ========= //

axios.post(`${API_URL}/users/login`,{
    username: "pri2020@teste.uminho.pt",
    password: "123"
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

// // GET home page
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
