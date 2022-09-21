const deleteUser = async (req, res) => {
    const { user } = res;
    try {
        await user.remove();
        res.json({ message: "User Deleted" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = deleteUser;
