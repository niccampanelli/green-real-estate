
module.exports = class Immobile {

    constructor(id, purpose, address, number, complement, 
        cep, district, city, uf, type, 
        terrainArea, immobileArea, parkNumber, bathNumber, bedNumber,
        price, description, reference, dateSubscript, status, id_usuario){
            this.id = id;
            this.purpose = purpose;
            this.address = address;
            this.number = number;
            this.complement = complement;
            this.cep = cep;
            this.district = district;
            this.city = city;
            this.uf = uf;
            this.type = type;
            this.terrainArea = terrainArea;
            this.immobileArea = immobileArea;
            this.parkNumber = parkNumber;
            this.bathNumber = bathNumber;
            this.bedNumber = bedNumber;
            this.price = price;
            this.description = description;
            this.reference = reference;
            this.dateSubscript = dateSubscript;
            this.status = status;
            this.id_usuario = id_usuario;
        }  
}