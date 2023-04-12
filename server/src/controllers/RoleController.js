const RoleModel = require('../models/Role');

//* Cadastrar
exports.register = async (request, response) => {
    const roleData = request.body;

    await RoleModel.create(roleData)
        .then((createdRole) => {
            return response.status(201).json({ 
                status:  'OK', 
                message: 'Role cadastrado com sucesso!',
                data:    createdRole
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao criar role: ${error}`,
                data:    null
            });
        });
}

//* Encontrar
exports.find = async (request, response) => {
    const roleData = request.body;

    await RoleModel.findOne({ id: roleData.id })
        .then((findedRole) => {
            if(findedRole) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Role encontrado com sucesso!',
                    data:    findedRole
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK',
                    message: 'Role não encontrado!',
                    data:    findedRole
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar role: ${error}`,
                data:    null
            });
        });
}

//* Obter todos
exports.findAll = async (request, response) => {
    await RoleModel.find()
        .then((allRoles) => {
            return response.status(200).json({ 
                status:  'OK', 
                message: 'Roles encontrados com sucesso!',
                data:    allRoles
            });
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao encontrar roles: ${error}`,
                data:    null
            });
        });
}

//* Alterar
exports.update = async (request, response) => {
    const roleData = request.body;

    await RoleModel.updateOne({ id: roleData.id }, { description: roleData.description })
        .then((updatedRole) => {
            if(updatedRole.modifiedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Role atualizado com sucesso!',
                    data:    updatedRole
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao atualizar role, pois o mesmo não existe ou os dados não foram alterados!',
                    data:    updatedRole
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao atualizar role: ${error}`,
                data:    null
            });
        });
}

//* Deletar
exports.delete = async (request, response) => {
    const roleID = request.url.replace("/role/delete/", "");

    await RoleModel.deleteOne({ id: roleID })
        .then((deletedRole) => {
            if(deletedRole.deletedCount > 0) {
                return response.status(200).json({ 
                    status:  'OK', 
                    message: 'Role excluído com sucesso!',
                    data:    deletedRole
                });
            } else {
                return response.status(400).json({ 
                    status:  'OK', 
                    message: 'Erro ao excluir role, pois o mesmo não existe!',
                    data:    deletedRole
                });
            }
        })
        .catch((error) => {
            return response.status(400).json({ 
                status:  'ERROR', 
                message: `Erro ao excluir role: ${error}`,
                data:    null
            });
        });
}