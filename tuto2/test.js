const axios = require('axios').default


axios.get('https://www.telegraaf.nl/')
.then(res=>res.data)
.then(data=>{
    console.log(data)
})