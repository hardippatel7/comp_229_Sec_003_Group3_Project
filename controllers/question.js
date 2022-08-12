
let QuestionModel = require('../models/question');

module.exports.addQuestion = (req, res, next) => {
    const question = new QuestionModel({
        userId: req.body.userId,
        productId: req.body.productId,
        question: req.body.question,
        reply: req.body.reply
      });
      question.save(question).then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error occurred while adding question",
      });
    });
}