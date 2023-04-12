const AutorizacaoModel = require('../models/Autorizacao');

//* Cadastrar
exports.register = async (request, response) => {
    const autorizacaoData = request.body;

    await AutorizacaoModel.create(autorizacaoData)
        .then((createdAutorizacao) => {
            return response.status(201).json({ 
                status:  'OK', 
                message: 'Autorização cadastrada com sucesso!',
                data:    createdAutorizacao
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao criar autorização: ${error}`,
                data:    null
            });
        });
}

//* Encontrar
exports.find = async (request, response) => {
    const autorizacaoData = request.body;

    await AutorizacaoModel.findOne({ id: autorizacaoData.id })
        .then((findedAutorizacao) => {
            if(findedAutorizacao) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Autorização encontrada com sucesso!',
                    data:    findedAutorizacao
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK',
                    message: 'Autorização não encontrada!',
                    data:    findedAutorizacao
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar autorização: ${error}`,
                data:    null
            });
        });
}

//* Obter todos
exports.findAll = async (request, response) => {
    await AutorizacaoModel.find()
        .then((allAutorizacao) => {
            return response.status(200).json({ 
                status:  'OK', 
                message: 'Autorizações encontradas com sucesso!',
                data:    allAutorizacao
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar Autorizações: ${error}`,
                data:    null
            });
        });
}

//* Alterar
exports.update = async (request, response) => {
    const autorizacaoData = request.body;

    await AutorizacaoModel.updateOne({ id: autorizacaoData.id }, { role: autorizacaoData.role, funcionalidade: autorizacaoData.funcionalidade })
        .then((updatedAutorizacao) => {
            if(updatedAutorizacao.modifiedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Autorização atualizada com sucesso!',
                    data:    updatedAutorizacao
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao atualizar autorização, pois o mesmo não existe ou os dados não foram alterados!',
                    data:    updatedAutorizacao
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao atualizar autorização: ${error}`,
                data:    null
            });
        });
}

//* Deletar
exports.delete = async (request, response) => {
    const autorizacaoData = request.body;

    await AutorizacaoModel.deleteOne({ id: autorizacaoData.id })
        .then((deletedAutorizacao) => {
            if(deletedAutorizacao.deletedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Autorização excluída com sucesso!',
                    data:    deletedAutorizacao
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao excluir autorização, pois a mesma não existe!',
                    data:    deletedAutorizacao
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao excluir autorização: ${error}`,
                data:    null
            });
        });
}