const FuncionalidadeModel = require('../models/Funcionalidade');

//* Cadastrar
exports.register = async (request, response) => {
    const funcionalidadeData = request.body;

    await FuncionalidadeModel.create(funcionalidadeData)
        .then((createdFuncionalidade) => {
            return response.status(201).json({ 
                status:  'OK', 
                message: 'Funcionalidade cadastrada com sucesso!',
                data:    createdFuncionalidade
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao criar funcionalidade: ${error}`,
                data:    null
            });
        });
}

//* Encontrar
exports.find = async (request, response) => {
    const funcionalidadeData = request.body;

    await FuncionalidadeModel.findOne({ id: funcionalidadeData.id })
        .then((findedFuncionalidade) => {
            if(findedFuncionalidade) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Funcionalidade encontrada com sucesso!',
                    data:    findedFuncionalidade
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK',
                    message: 'Funcionalidade não encontrada!',
                    data:    findedFuncionalidade
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar funcionalidade: ${error}`,
                data:    null
            });
        });
}

//* Obter todos
exports.findAll = async (request, response) => {
    await FuncionalidadeModel.find()
        .then((allFuncionalidade) => {
            return response.status(200).json({ 
                status:  'OK', 
                message: 'Funcionalidades encontradas com sucesso!',
                data:    allFuncionalidade
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar funcionalidades: ${error}`,
                data:    null
            });
        });
}

//* Alterar
exports.update = async (request, response) => {
    const funcionalidadeData = request.body;

    await FuncionalidadeModel.updateOne({ id: funcionalidadeData.id }, { description: funcionalidadeData.description })
        .then((updatedFuncionalidade) => {
            if(updatedFuncionalidade.modifiedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Funcionalidade atualizada com sucesso!',
                    data:    updatedFuncionalidade
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao atualizar funcionalidade, pois o mesmo não existe ou os dados não foram alterados!',
                    data:    updatedFuncionalidade
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao atualizar funcionalidade: ${error}`,
                data:    null
            });
        });
}

//* Deletar
exports.delete = async (request, response) => {
    const funcionalidadeData = request.body;

    await FuncionalidadeModel.deleteOne({ id: funcionalidadeData.id })
        .then((deletedFuncionalidade) => {
            if(deletedFuncionalidade.deletedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Funcionalidade excluída com sucesso!',
                    data:    deletedFuncionalidade
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao excluir funcionalidade, pois a mesma não existe!',
                    data:    deletedFuncionalidade
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao excluir funcionalidade: ${error}`,
                data:    null
            });
        });
}