const {readFileSync}=require('fs');
var load=()=>JSON.parse(readFileSync('emp.json'))//stringfy //parse
module.exports={load};