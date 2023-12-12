const MetaDataSet = require("../MetaDataSet");

module.exports = async (req, res) => {
    const host = req.headers.host;
    const { id } = req.query;
    if (host === "opensea.io") {        
        res.json(JSON.parse(JSON.stringify(MetaDataSet[id])))
    } else {
        return res.redirect(301, `https://opensea.io/assets/matic/0xf9ca13e465C35d8074973E62fcfDC062BF8A62Cb/${id}`);
    }   
}