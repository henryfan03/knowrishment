const createUser = async (request, response) => {
    return response.status(200).json("create user api working");
};

module.exports = {
    createUser,
};