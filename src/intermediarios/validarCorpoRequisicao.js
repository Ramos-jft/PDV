const validarCorpoRequisicao = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        next();
    } catch (error) {
        if (error.message) {
            return res.status(400).json({
                erro: error.message,
            })
        }
    };
};

module.exports = validarCorpoRequisicao;