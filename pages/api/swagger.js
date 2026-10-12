import { type } from "os"
import Livros from "../livraria/livros/[livroID]"

const swaggerDocument = {
    openapi: '3.1.0',
    info: { 
        title: 'Livraria Virtual',
        version: '1.0.0',
        description: 'Documentação do projeto de SPA/e-commerce',
    },
    paths: {
        '/api/books': {
            get: {
                tags: ['Books'],
                summary: "Busca por uma lista de livros",
                parameters: [
                    { $ref: '#/components/parameters/category' },
                    { $ref: '#/components/parameters/ordination' },
                    { $ref: '#/components/parameters/interval' },
                    { $ref: '#/components/parameters/limit' }],
                responses: {
                    200: { $ref: '#/components/responses/findedBooks' },
                    500: { $ref: '#/components/responses/serverError' }
                }
            }, 
            post: {
                tags: ['Books'],
                summary: "Cadastra um novo livro",
                parameters: [{  }],
                requestBody: { $ref: '#/components/requestBodies/createBook' },
                responses: {
                    201: { $ref: '#/components/responses/createdBook' },
                    400: { $ref: '#/components/responses/requestFailed' },
                    500: { $ref: '#/components/responses/serverError' },
                }
            }
        },
        '/api/books/{id}': {
            get: { 
                tags: ['Books'],
                summary: "Consulta individual de um livro",
                parameters: [{ $ref: '#/components/parameters/bookId' }],
                responses: {
                    200: { $ref: '#/components/responses/findedBook' },
                    404: { $ref: '#/components/responses/bookNotFounded' },
                    500: { $ref: '#/components/responses/serverError' }
                }
            }
        }
    },
    components: {
        schemas: {
            "Book": {
                type: 'object',
                required: [
                    "_id",
                ],
                properties: {
                    _id: {
                        type: "object",
                        example: "ObjectId('6434a318eeed000185e5fd8f')"
                    },
                    titulo: {
                        type: 'string',
                        example: 'Duna'

                    },
                    autor: {
                        type: 'string',
                        example: 'Frank Herbert'
                    },
                    preco: { 
                        type: 'string',
                        example: '49.90'
                    },
                    editora: { 
                        type: 'string',
                        example: 'Editora Aleph'
                    },
                    categoria: {
                        type: 'array',
                        example: ['Ficção Científica']
                    },
                    ano: { 
                        type: 'string',
                        example: '2017'
                    },
                    descricao: { 
                        type: 'string',
                        example: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.'
                    },
                    desconto: { 
                        type: 'string',
                        example: '40'
                    },
                    capa: { 
                        type: 'string',
                        example: '12.png'
                    },
                    vendas: { 
                        type: 'string',
                        example: '196'
                    },
                },
            },
            "Books": {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Book'
                }
            },
            "FormBook": {
                type: 'object',
                required: [
                    "titulo",
                    "capa",
                    "editora",
                    "categoria",
                    "descricao",
                    "preco"
                ],
                properties: {
                    titulo: {
                        type: 'string',
                        example: 'Game of Thrones'

                    },
                    autor: {
                        type: 'string',
                        example: 'George R. R. Martin'
                    },
                    preco: { 
                        type: 'string',
                        example: '49.90'
                    },
                    editora: { 
                        type: 'string',
                        example: 'Leya'
                    },
                    categoria: {
                        type: 'array',
                        example: ['Fantasia Medieval']
                    },
                    ano: { 
                        type: 'string',
                        example: '1996'
                    },
                    descricao: { 
                        type: 'string',
                        example: '.'
                    },
                    desconto: { 
                        type: 'string',
                        example: '10'
                    },
                    capa: { 
                        type: 'string',
                        example: '13.png'
                    },
                }
            },
            "RequestError": {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Request failed'
                    }
                }
            },
            "NotFoundedError": {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Request failed: not founded'
                    }
                },

            },
            "ServerError": {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'An unexpected error occurred on the server.'
                    }
                }
            }
        },
        parameters: {
            bookId: {
                name: 'id',
                in: 'path',
                required: true,
                description: 'Fornece o identificador do livro',
                schema: {
                    type: "string",
                }
            },
            category: {
                name: 'category',
                in: 'query',
                required: true,
                description: 'Filtrar elementos da consulta por categoria',
                schema: {
                    type: 'string'
                }
            },
            ordination: {
                name: 'sort',
                in: 'query',
                required: true,
                description: 'Define o critério de ordenação da consulta',
                schema: {
                    type: 'string'
                }
            },
            interval: {
                name: 'skip',
                in: 'query',
                required: true,
                description: 'Define a posição inicial da consulta (primeiro elemento, valor 0)',
                schema: {
                    type: 'number'
                }
            },
            limit: {
                name: 'limit',
                in: 'query',
                required: true,
                description: 'Define a posição final da consulta (quantidade total de elementos)',
                schema: {
                    type: 'number'
                }
            },
        },
        requestBodies: {
            createBook: {
                description: 'Dados para cadastrar um novo livro',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/FormBook'
                        }
                    }
                }
            }
        },
        responses: {
            findedBook: {
                description: 'Retorna os dados referentes a um livro especificado pela sua ID',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Book'
                        }
                    }
                }
            },
            findedBooks: {
                description: 'Retorna uma lista de livros com filtros opcionais',
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Books",
                        }
                    }
                },
            },
            createdBook: {
                description: "Novo livro criado",
                content: {
                    'applicarion/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: 'success'
                                }
                            }
                        }
                    }
                }
            },
            requestFailed: {
                description: 'Falha na requisição',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/RequestError'
                        }
                    }
                }
            },
            bookNotFounded: {
                description: 'Livro não encontrado',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/NotFoundedError'
                        }
                    }
                }
            },
            serverError: {
                description: 'Erro de servidor',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ServerError'
                        }
                    }
                }
            }
        }
    },
    security: {}
}

export default function handler(req, res) {
    res.status(200).json(swaggerDocument)
}