
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


module.exports.reply = (req, res, next) => {
    const id = req.params.id;
    QuestionModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Question not found. Question id : ${id}`,
        });
      } else {
        res.send(data).status(200);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error occurred while updating reply" });
    });
}

module.exports.questionList = async(req, res, next)=> { 
  let id = req.body.productId;

await QuestionModel.find({ productId: id}).then((data) => {
      console.log(data);
      if (!data) {
          res.status(404).send({
          message: 'No data',
        });
      } else {
        res.send(data).status(200);
      }
    });



  }
