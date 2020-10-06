const createUser = async (request, response) => {
    return response.status(200).json("message: create user api is working");
};

module.exports = {
    createUser,
};