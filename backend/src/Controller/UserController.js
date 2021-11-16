module.exports = {
    async create(req, res){
        console.log(req.body);
        return res.json({"status": "foi"});
    },

    async read(req, res){},

    async update(req, res){},

    async delete(req, res){}
}