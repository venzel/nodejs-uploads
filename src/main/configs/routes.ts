export const config = (app) => {
    app.get('/', async (req, res) => {
        return res.status(200).send({ ok: true });
    });
};
