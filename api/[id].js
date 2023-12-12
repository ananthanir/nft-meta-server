const MetaDataSet = require("../MetaDataSet");

module.exports = async (req, res) => {
    const host = req.headers.host;
    if (host === "opensea.io") {
        const { id } = req.query;
        res.json(JSON.parse(JSON.stringify(MetaDataSet[id])))
    } else {
        const { id } = req.query;
        res.json(JSON.parse(JSON.stringify(MetaDataSet[id])))
    }   
}