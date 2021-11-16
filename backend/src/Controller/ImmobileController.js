const connection = require('../Database/Connection');
const Immobile = require('../Model/Immobile');

module.exports = {
    async create(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Realizando a conexão ao banco de dados
            conn = connection.getPool().getConnection();

            // Salvando a requisição à variável newImmobile
            var newImmobile = req.body;

            // Variável responseQuery que salvará o response da query no banco
            var responseQuery = "";

            // Variável que armazenará o id do objeto criado no banco
            var insertedId = 0;

            // Verificando o tipo do imóvel que será cadastrado
            // Se for apartamento ou casa
            if(newImmobile.type == "Apartamento" || newImmobile.type == "Casa"){
                // Se o imóvel for sugerido por um usuário 
                if(newImmobile.id_user){
                    // Se o imóvel possuir um número de referência
                    if(newImmobile.reference){
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, parkNumber, 
                                                                                    bathNumber, bedNumber, price, 
                                                                                    description, dateSubscript, 
                                                                                    status, id_user) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.parkNumber, 
                                                                                    newImmobile.bathNumber, newImmobile.bedNumber, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.dateSubscript, 
                                                                                    newImmobile.status, newImmobile.id_user])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
                    // Se o imóvel não possuir um número de referência
                    else{
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, parkNumber, 
                                                                                    bathNumber, bedNumber, price, 
                                                                                    description, reference, dateSubscript, 
                                                                                    status, id_user) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.parkNumber, 
                                                                                    newImmobile.bathNumber, newImmobile.bedNumber, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.reference, newImmobile.dateSubscript, 
                                                                                    newImmobile.status, newImmobile.id_user])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
    
                }
                // Se o imóvel não possuir um id do usuário (for criado pelo corretor/imobiliária)
                else{
                    // Se o imóvel possuir um número de referência
                    if(newImmobile.reference){
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, parkNumber, 
                                                                                    bathNumber, bedNumber, price, 
                                                                                    description, reference, dateSubscript, 
                                                                                    status) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.parkNumber, 
                                                                                    newImmobile.bathNumber, newImmobile.bedNumber, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.reference, newImmobile.dateSubscript, 
                                                                                    newImmobile.status])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
                    // Se o imóvel não possuir um número de referência
                    else{
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, parkNumber, 
                                                                                    bathNumber, bedNumber, price, 
                                                                                    description, dateSubscript, 
                                                                                    status) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.parkNumber, 
                                                                                    newImmobile.bathNumber, newImmobile.bedNumber, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.dateSubscript, 
                                                                                    newImmobile.status])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
                    
                }
            }
            // Se o imóvel for galpão, terreno ou comercial
            else{
                // Se o imóvel for sugerido por um usuário
                if(newImmobile.id_user){
                    // Se o imóvel possuir um número de referência
                    if(newImmobile.reference){
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, price, 
                                                                                    description, dateSubscript, 
                                                                                    status, id_user) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.dateSubscript, 
                                                                                    newImmobile.status, newImmobile.id_user])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
                    // Se o imóvel não possuir um número de referência
                    else{
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, price, 
                                                                                    description, reference, dateSubscript, 
                                                                                    status, id_user) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.reference, newImmobile.dateSubscript, 
                                                                                    newImmobile.status, newImmobile.id_user])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
    
                }
                // Se o imóvel não possuir um id do usuário (foi criado pelo corretor/imobiliária)
                else{
                    // Se o imóvel possuir um número de referência
                    if(newImmobile.reference){
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, price, 
                                                                                    description, reference, dateSubscript, 
                                                                                    status) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.reference, newImmobile.dateSubscript, 
                                                                                    newImmobile.status])
                                                    .then(result => {
                                                        insertedId = result.insertId;
                                                        return res.json({id: insertedId, data: newImmobile});
                                                    });
    
                    }
                    // Se o imóvel não possuir um número de referência
                    else{
                        // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                        responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                    complement, cep, district, 
                                                                                    city, uf, type, terrainArea, 
                                                                                    immobileArea, price, 
                                                                                    description, dateSubscript, 
                                                                                    status) values (?, ?, ?, ?,
                                                                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                    [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                    newImmobile.complement, newImmobile.cep, newImmobile.district, 
                                                                                    newImmobile.city, newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
                                                                                    newImmobile.immobileArea, newImmobile.price, 
                                                                                    newImmobile.description, newImmobile.dateSubscript, 
                                                                                    newImmobile.status])
                                                        .then(result => {
                                                            insertedId = result.insertId;
                                                            return res.json({id: insertedId, data: newImmobile});
                                                        });
    
                    }
                    
                }
            }
        }
        catch(err){
            throw err;
        }
    },

    async read(req, res){},

    async update(req, res){},

    async delete(req, res){},
}