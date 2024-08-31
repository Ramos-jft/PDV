const Joi = require('joi');

const schemaCadastroCliente = Joi.object({
    nome: Joi.string().required().messages({
        'string.empty': 'O campo nome é obrigatório.',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O email informado não é válido.',
    }),
    cpf: Joi.string().replace(/\D/g, '').length(11).required().messages({
        'string.empty': 'O campo CPF é obrigatório.',
        'string.length': 'O CPF deve ter 11 dígitos, com ou sem formatação.',
    }),
    cep: Joi.string().required().messages({
        'any.required': 'O campo cep é obrigatório.',
        'string.empty': 'O campo cep é obrigatório.',
    }),
    rua: Joi.string().required().messages({
        'any.required': 'O campo rua é obrigatório.',
        'string.empty': 'O campo rua é obrigatório.',
    }),
    numero: Joi.string().required().messages({
        'any.required': 'O campo numero é obrigatório.',
        'string.empty': 'O campo numero é obrigatório.',
    }),
    bairro: Joi.string().required().messages({
        'any.required': 'O campo bairro é obrigatório.',
        'string.empty': 'O campo bairro é obrigatório.',
    }),
    cidade: Joi.string().required().messages({
        'any.required': 'O campo cidade é obrigatório.',
        'string.empty': 'O campo cidade é obrigatório.',
    }),
    estado: Joi.string().required().messages({
        'any.required': 'O campo estado é obrigatório.',
        'string.empty': 'O campo estado é obrigatório.',
    }),
});

const schemaEditarDadosCliente = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email não pode estar vazio.'
    }),
    cpf: Joi.string().replace(/\D/g, '').length(11).required().messages({
        'string.empty': 'O campo CPF é obrigatório.',
        'string.length': 'O CPF deve ter 11 dígitos, com ou sem formatação.',
    }),
    cep: Joi.string().required().messages({
        'any.required': 'O campo cep é obrigatório.',
        'string.empty': 'O campo cep é obrigatório.',
    }),
    rua: Joi.string().required().messages({
        'any.required': 'O campo rua é obrigatório.',
        'string.empty': 'O campo rua é obrigatório.',
    }),
    numero: Joi.string().required().messages({
        'any.required': 'O campo numero é obrigatório.',
        'string.empty': 'O campo numero é obrigatório.',
    }),
    bairro: Joi.string().required().messages({
        'any.required': 'O campo bairro é obrigatório.',
        'string.empty': 'O campo bairro é obrigatório.',
    }),
    cidade: Joi.string().required().messages({
        'any.required': 'O campo cidade é obrigatório.',
        'string.empty': 'O campo cidade é obrigatório.',
    }),
    estado: Joi.string().required().messages({
        'any.required': 'O campo estado é obrigatório.',
        'string.empty': 'O campo estado é obrigatório.',
    }),

});

module.exports = {
    schemaCadastroCliente,
    schemaEditarDadosCliente
};