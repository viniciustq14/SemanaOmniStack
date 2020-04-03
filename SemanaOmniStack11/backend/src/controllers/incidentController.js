const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id

        })

        return res.json({ id });
    },
    async index(req, res) {
        /*const { page } = req.query;
        page--;
        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents').
            join('ongs', 'ongs.id', '=', 'incidents.ong_id').
            limit(5).offset(page * 5).
            select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        res.header('X-Total-Count', count['count(*)'])*/

        const incidents=await connection('incidents').join('ongs','ongs.id','=','incidents.ong_id').select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        return res.json(incidents);
    },
    async delete(req, res) {
        const ong_id = req.headers.authorization;
        const { id } = req.params;

        const incidents = await connection('incidents').where('id', id).select('ong_id').fist();

        if (incidents.ong_id != ong_id) {
            return res.status(401).json({ error: 'Operation not permited' });
        }
        await connection('incidents').where('id', id).delete();
        return res.status(201).send();

    }
}