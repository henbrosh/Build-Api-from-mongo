
const main1 = require("../testmongo/mainFile.js")

async function getData(){
const f = await main1.main("find","rig4");
return f;
}
module.exports={
    getData,
}

