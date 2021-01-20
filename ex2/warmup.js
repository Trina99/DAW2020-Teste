const axios = require('axios');

API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTA2NzkzMywiZXhwIjoxNjExMDk2NzMzfQ.h5IONrQ8e7n35x9S821tlfTmOrRCdOl17dlBz9Dvpq3GQW8aucJPE-0dQBSztfzInFLRZPoGNrrQASFldvGw5YACqV_Cvum7EBgUn_kv3jN858t2qexFU0e0XMRg4aher_on_0lgVXlo3teUkz5wXQMjr0ryyN_r2xCOdfDcxYzQQ9bUzqPpWUE2Z6MLzT_xdpSMd98XH_7jN8WjlFz2U7Vp-_vIC_LoStaNzZ5G_BcVv39yntGklmxWCx38Eje2rq2GbyKL85osjSLBMgre4mw0XK3mdQdgcu4-7el466iNdUHXj5JSD6Tp7XL-hB3cx1Gsv7gYdekBjPeKQA7O1Q'
API_URL = 'http://clav-test.di.uminho.pt/v2'










// axios.get(`${API_URL}/classes/c750/descendencia?nivel=3&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('nº processos nivel 3 pertencentes à descendência da classe 750:',api_res.data.length);
//     console.log('processos:',api_res.data);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });


// axios.get(`${API_URL}/classes?nivel=4&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('nº subprocessos:',api_res.data.length);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });

// axios.get(`${API_URL}/classes/c750.30/descendencia?nivel=3&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('nº processos nivel 3 pertencentes à descendência da classe 750.30:',api_res.data.length);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });

// axios.get(`${API_URL}/classes/c750.30.001/descendencia?nivel=3&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('nº processos nivel 3 pertencentes à descendência da classe 750.30:',api_res.data.length);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });









// axios.get(`${API_URL}/classes?nivel=3&estrutura=lista&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('num nivel 3:',api_res.data.length);
//     //console.log('nivel 3:',api_res.data);
//     var i = 0;
//     api_res.data.forEach(e => {
//         if(e.codigo.match(/^750.+/))
//             ++i;
        
//     });
//     console.log("num classes 750:",i);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });

// axios.get(`${API_URL}/classes?nivel=4&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     console.log('num nivel 4',api_res.data.length);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });


// axios.get(`${API_URL}/classes?nivel=3&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     var i = 0;
//     api_res.data.forEach(e => {
//         if(e.codigo.match(/^750\.30.+/))
//             ++i;
        
//     });
//     console.log("num descendencia 750.30:",i);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });

// axios.get(`${API_URL}/classes?nivel=3&token=${API_TOKEN}`)
// .then((api_res) => {
//     // handle success''
//     var i = 0;
//     api_res.data.forEach(e => {
//         if(e.codigo.match(/^750\.30\.001.+/))
//             ++i;
        
//     });
//     console.log("num descendencia 750.30.001:",i);
// })
// .catch((err) => {
//     // handle error
//     console.log(err);
// });