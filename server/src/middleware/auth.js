module.exports = (request, response, next) => {
  try {
    const userRole = request.headers.authorization;

    if(userRole && [4, 5].includes(Number(userRole))) {
        next();
    } else {
        response.status(401).json({
            status:  'ERROR',
            message: 'O usuário não possui permissão de acesso!',
            data:    null
        });
        throw 'Acesso não autorizado!';
    }
  } catch {
    response.status(401).json({
        status:  'ERROR',
        message: 'Ocorreu um erro ao validar o acesso do usuário!',
        data:    null
    });
  }
};