const fs = require('fs');
const path = require('path');

const fileName = 'dbLocation.json';
const filePath = path.join(__dirname, '..', 'database', fileName);

class LocationModel {
    static async getLocation() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === 'ENDENT') {
                        this.writeLocationToFile([]).then(resolve).catch(reject);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    }

    static async writeLocationToFile(location) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(location), (err) => {
                if (err) reject(err);
                console.log(`Data written to file: ${filePath}`);
                resolve(this.getAllLocation());
            });
        });
    }

    static async getAllLocation() {
        const locations = await this.getLocation();
        console.log(locations);
        return locations;
    }

    static async createLocation(location) {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            let database = []
            database = JSON.parse(data)

            database.push(location)

            this.writeLocationToFile(database)
            this.getLocation
        })

    }

    static async verifica(location) {
        // função assincrona que pega o data.reqbody e guarda na variavel location

        // cria um array 
        let database = [];
        try {
            // le o arquivo na qual está salvo todas as location
            const data = fs.readFileSync(filePath, 'utf-8');
            // atribui ao array os dados lidos do arquivo json transformando os em objeto (parse)
            database = JSON.parse(data);
        } catch (err) {
            console.error('Erro ao ler o arquivo:');
            return;
        }

        // Verifica se algum objeto no arquivo é igual ao objeto 'location'
        const igual = database.some(item => {

            // transforma o objeto achado em json e verifica se ele é igual ao location
            return JSON.stringify(item) === JSON.stringify(location);
        });

        if (igual) {
            console.log('Objeto já existe no arquivo.');
            return 1;
        } else {
            console.log('Objeto não encontrado no arquivo.');
            return 0;
        }



    }

}

module.exports = LocationModel;
