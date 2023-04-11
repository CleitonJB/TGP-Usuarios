const UserModel = require('../models/User');

//* Cadastro
exports.register = async (request, response) => {
    const userData = request.body;

    await UserModel.create(userData)
        .then((createdUser) => {
            return response.status(201).json({ 
                status:  'OK', 
                message: 'Usuário cadastrado com sucesso!',
                data:    createdUser
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao criar usuário: ${error}`,
                data:    null
            });
        });
}

//* Login
exports.find = async (request, response) => {
    const userData = request.body;

    await UserModel.findOne({ name: userData.name, password: userData.password })
        .then((findedUser) => {
            if(findedUser) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Usuário encontrado com sucesso!',
                    data:    findedUser
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK',
                    message: 'Usuário não encontrado!',
                    data:    findedUser
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar usuário: ${error}`,
                data:    null
            });
        });
}

//* Obter todos
exports.findAll = async (request, response) => {
    await UserModel.find()
        .then((allUsers) => {
            return response.status(200).json({ 
                status:  'OK', 
                message: 'Usuários encontrados com sucesso!',
                data:    allUsers
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar usuários: ${error}`,
                data:    null
            });
        });
}

//* Alterar
exports.update = async (request, response) => {
    const userData = request.body;

    await UserModel.updateOne({ id: userData.id }, { name: userData.name, email: userData.email, password: userData.password, role: userData.role })
        .then((updatedUser) => {
            if(updatedUser.modifiedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Usuário atualizado com sucesso!',
                    data:    updatedUser
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao atualizar usuário, pois o mesmo não existe ou os dados não foram alterados!',
                    data:    updatedUser
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao atualizar usuário: ${error}`,
                data:    null
            });
        });
}

//* Deletar
exports.delete = async (request, response) => {
    const userData = request.body;

    await UserModel.deleteOne({ id: userData.id, name: userData.name, email: userData.email, role: userData.role })
        .then((deletedUser) => {
            if(deletedUser.deletedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Usuário excluído com sucesso!',
                    data:    deletedUser
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao excluir usuário, pois o mesmo não existe!',
                    data:    deletedUser
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao excluir usuário: ${error}`,
                data:    null
            });
        });
}