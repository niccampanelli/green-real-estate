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
            
            if(newImmobile.complement){
                // Verificando o tipo do imóvel que será cadastrado
                // Se for apartamento ou casa, terá insert de todos os cômodos (vaga, banheiro, quarto)
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
            else{
                // Verificando o tipo do imóvel que será cadastrado
                // Se for apartamento ou casa, terá insert de todos os cômodos (vaga, banheiro, quarto)
                if(newImmobile.type == "Apartamento" || newImmobile.type == "Casa"){
                    // Se o imóvel for sugerido por um usuário 
                    if(newImmobile.id_user){
                        // Se o imóvel possuir um número de referência
                        if(newImmobile.reference){
                            // Uma requisição com o insert é realizada no banco e a response é salva na variável responseQuery
                            responseQuery = (await conn).query(`INSERT INTO tb_immobile (purpose, address, number, 
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, parkNumber, 
                                                                                        bathNumber, bedNumber, price, 
                                                                                        description, dateSubscript, 
                                                                                        status, id_user) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, parkNumber, 
                                                                                        bathNumber, bedNumber, price, 
                                                                                        description, reference, dateSubscript, 
                                                                                        status, id_user) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, parkNumber, 
                                                                                        bathNumber, bedNumber, price, 
                                                                                        description, reference, dateSubscript, 
                                                                                        status) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, parkNumber, 
                                                                                        bathNumber, bedNumber, price, 
                                                                                        description, dateSubscript, 
                                                                                        status) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, price, 
                                                                                        description, dateSubscript, 
                                                                                        status, id_user) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, price, 
                                                                                        description, reference, dateSubscript, 
                                                                                        status, id_user) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, city, 
                                                                                        uf, type, terrainArea, 
                                                                                        immobileArea, price, 
                                                                                        description, reference, dateSubscript, 
                                                                                        status) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
                                                                                        cep, district, 
                                                                                        city, uf, type, terrainArea, 
                                                                                        immobileArea, price, 
                                                                                        description, dateSubscript, 
                                                                                        status) values (?, ?, ?,
                                                                                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                                        [newImmobile.purpose, newImmobile.address, newImmobile.number, 
                                                                                        newImmobile.cep, newImmobile.district, newImmobile.city, 
                                                                                        newImmobile.uf, newImmobile.type, newImmobile.terrainArea, 
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
        }
        catch(err){
            return res.json(err);
        }
    },

    /* 
        Método responsável por buscar registros de imóveis no banco de dados 
    */
    async read(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Variável que armazenará o objeto enviado pela response
            var reqImmobile = req.query;

            // Verificando se o corpo da requisição possui um objeto com alguma chave inválida
            for(item in reqImmobile){
                if(item !== 'id' && item !== 'purpose' && item !== 'address' &&
                   item !== 'number' && item !== 'complement' && item !== 'cep' && 
                   item !== 'district' && item !== 'city' && item !== 'uf' &&
                   item !== 'type' && item !== 'terrainArea' && item !== 'immobileArea' &&
                   item !== 'parkNumber' && item !== 'bathNumber' && item !== 'bedNumber' &&
                   item !== 'price' && item !== 'description' && item !== 'reference' &&
                   item !== 'dateSubscript' && item !== 'status' && item !== 'id_user')
                   return res.status(400).send("Corpo da requisição enviada está incorreto.");
            }

            // Criando a conexão com o banco
            conn = connection.getPool().getConnection();

            console.log(reqImmobile);

            // Variável que armazenará a query que será realizada
            var sql = "";

            // Variável de condição da query
            var sqlCondition = ``;

            // Percorrendo objeto para verificar quais existem como parâmetro para as condições da query
            for(item in reqImmobile){
                // Se a chave do objeto possuir valor
                if(reqImmobile[item]){
                    // Obs: o item retorna o nome da chave, enquanto o reqImmobile[item] retorna o valor da chave
                    sqlCondition += ` and ${item} = '${reqImmobile[item]}'`;
                }
            }

            sql = `SELECT id, purpose, address,
                          number, complement, cep, 
                          district, city, uf, 
                          type, terrainArea, immobileArea, 
                          parkNumber, bathNumber, bedNumber, 
                          price, description, reference, 
                          dateSubscript, status, id_user FROM tb_immobile
                          WHERE 1 = 1 ${sqlCondition}`;

            (await conn).query(sql).then(result => 
                {
                    sql = null;
                    sqlCondition = null;
                    reqImmobile = null;
                    
                    console.log(result);

                    return res.json(result);
                }
            );
        }
        catch(err){
            return res.json(err);
        }
    },

    /* 
        Método responsável por atualizar registros de imóveis no banco de dados 
    */
    async update(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Variável que armazenará o objeto enviado pela response
            var reqImmobile = req.body;

            for(item in reqImmobile){
                if(item !== 'id' && item !== 'purpose' && item !== 'address' &&
                   item !== 'number' && item !== 'complement' && item !== 'cep' && 
                   item !== 'district' && item !== 'city' && item !== 'uf' &&
                   item !== 'type' && item !== 'terrainArea' && item !== 'immobileArea' &&
                   item !== 'parkNumber' && item !== 'bathNumber' && item !== 'bedNumber' &&
                   item !== 'price' && item !== 'description' && item !== 'reference' &&
                   item !== 'dateSubscript' && item !== 'status' && item !== 'id_user')
                   return res.status(400).send("Corpo da requisição enviada está incorreto.");
            }

            // Se não houver um id informado não será possível realizar o update
            if(!reqImmobile.id)
                return res.status(400).send("É necessário informar o ID do imóvel para realizar um update.");
                
            // Criando a conexão com o banco
            conn = connection.getPool().getConnection();

            // Variável que armazenará a query que será realizada
            var sql = "";

            // Variável de condição da query
            var sqlCondition = ``;

            // Percorrendo objeto para verificar quais existem como parâmetro para as condições da query
            for(item in reqImmobile){
                // Se a chave do objeto possuir valor
                if(reqImmobile[item] && item != 'id'){
                    // Se for o último atributo a ser inserido
                    if(Object.keys(reqImmobile).indexOf(item) === Object.keys(reqImmobile).length - 1){
                        // Se o item a ser adicionado na condição for string, deve ter aspas na query
                        if(item === 'purpose' || item === 'address' || item === 'complement' || item === 'district' || 
                           item === 'city' || item === 'uf' || item === 'type' || item === 'description' || item === 'cep'){
                            // Obs: o item retorna o nome da chave, enquanto o reqImmobile[item] retorna o valor da chave
                            sqlCondition += `${item} = '${reqImmobile[item]}' `;
                        }
                        else{
                            // Obs: o item retorna o nome da chave, enquanto o reqImmobile[item] retorna o valor da chave
                            sqlCondition += `${item} = ${reqImmobile[item]}`;
                        }
                    }
                    else{
                        // Se o item a ser adicionado na condição for string, deve ter aspas na query
                        if(item === 'purpose' || item === 'address' || item === 'complement' || item === 'district' || 
                            item === 'city' || item === 'uf' || item === 'type' || item === 'description' || item === 'cep'){
                            // Obs: o item retorna o nome da chave, enquanto o reqImmobile[item] retorna o valor da chave
                            sqlCondition += `${item} = '${reqImmobile[item]}', `;
                        }
                        else{
                            // Obs: o item retorna o nome da chave, enquanto o reqImmobile[item] retorna o valor da chave
                            sqlCondition += `${item} = ${reqImmobile[item]}, `;
                        }
                    }
                }
            }

            sql = `UPDATE tb_immobile
                   SET ${sqlCondition}
                   WHERE id = ${reqImmobile.id}`;

            (await conn).query(sql).then(result => 
                {
                    sql = null;
                    sqlCondition = null;
                    reqImmobile = null;

                    return res.json({data: result});
                }
            );
        }
        catch(err){
            return res.json(err);
        }
    },

    /* 
        Método responsável por deletar registros de imóveis no banco de dados 
    */
    async delete(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
             // Variável que armazenará o objeto enviado pela response
            var reqImmobile = req.body;

            if(!reqImmobile.id)
                return res.status(400).send("É necessário informar o ID do imóvel para realizar um delete.");

            // Criando a conexão com o banco
            conn = connection.getPool().getConnection();
        
            var sql = `DELETE FROM tb_immobile
                       WHERE id = ${reqImmobile.id}`;

            (await conn).query(sql).then(result => {
                sql = null;
                reqImmobile = null;

                return res.json({data: result});
            });
        }
        catch(err){
            return res.json(err);
        }
    },
}