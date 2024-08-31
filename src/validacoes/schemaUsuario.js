const Joi = require('joi');

const schemaCadastrar = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
    }),
    senha: Joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
    }),
});

const schemaLogin = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
    }),
    senha: Joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
    }),
});

const schemaRedefinirSenha = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email não pode estar vazio.'
    }),
    senha_antiga: Joi.string().required().messages({
        'any.required': 'O campo senha antiga é obrigatório.',
        'string.empty': 'O campo senha antiga não pode estar vazio.'
    }),
    senha_nova: Joi.string().required().messages({
        'any.required': 'O campo senha nova é obrigatório.',
        'string.empty': 'O campo senha nova não pode estar vazio.'
    })
});

const schemaEditarUsuarioLogado = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email não pode estar vazio.'
    }),
    senha: Joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
    }),
});

module.exports = {
    schemaCadastrar,
    schemaLogin,
    schemaRedefinirSenha,
    schemaEditarUsuarioLogado
};