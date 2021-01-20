const axios = require('axios');

API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjczNCwiZXhwIjoxNjExMTgxNTM0fQ.Yz6NCx_o5-nF8pdHUzgBYRHPLiXDHG-P4YlAad5fcvefB6RyBF6-CDEnUtOYeFgwV_ACiFLPSCTigpIa_7gEq-TXl5tx4DFsRpHY2o6k4xO7AYj8j1IesewpDcSbTfaVKDMGI-q9tAxAmOX9VW5ikpi17CKZde74yRPXfGWvo9aKofA51dWfdp8HSM8JY-j-lYABtfW1OhDLADFJLJXtuaDDxiaVX4d7j97xXac30S0QGyEgdKGSpJ5UN-RU7qP34nt89iNVrCMgeSCkKn3Iq2NUMOqmSyWZb6wA19yuLb-qlEIK90hjEUiubqqVIBBr77vabuKVClHR8KgtH7jTEA'
API_URL = 'http://clav-api.di.uminho.pt/v2'




axios.get(`${API_URL}/classes/c900/descendencia?nivel=3&token=${API_TOKEN}`)
.then((api_res) => {
    // handle success''
    console.log('nº processos nivel 3 pertencentes à descendência da classe 900:',api_res.data.length);
    console.log('processos:',api_res.data);
})
.catch((err) => {
    // handle error
    console.log(err);
});


axios.get(`${API_URL}/entidades?token=${API_TOKEN}`)
.then((api_res) => {
    // handle success''
    console.log('nº entidades catalogadas:',api_res.data.length);
})
.catch((err) => {
    // handle error
    console.log(err);
});


axios.get(`${API_URL}/classes/c900.10/descendencia?nivel=3&token=${API_TOKEN}`)
.then((api_res) => {
    // handle success''
    console.log('nº processos nivel 3 pertencentes à descendência da classe 900.10:',api_res.data.length);
})
.catch((err) => {
    // handle error
    console.log(err);
});

axios.get(`${API_URL}/classes/c900.10.505/procRel?nivel=3&token=${API_TOKEN}`)
.then((api_res) => {
    // handle success''
    console.log('nº processos nivel 3 relacionados com a classe 900.10.505:',api_res.data.length);
})
.catch((err) => {
    // handle error
    console.log(err);
});



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