module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password
    }
}