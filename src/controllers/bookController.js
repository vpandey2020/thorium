const { count } = require("console");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function(req, res) {
    let book = req.body;
    let authorId = req.body.author;
    let publisherId = req.body.publisher;

    // 3. a)
    if (!authorId) {
        return res.send("Author id should be present in the body");
    }

    // 3. b)
    let author = await authorModel.findById(authorId);
    if (!author) {
        return res.send("No author present with this id");
    }

    // 3. c)
    if (!publisherId) {
        return res.send(" published id should be present in the request body ");
    }

    // 3. d)
    let publisher = await publisherModel.findById(publisherId);
    if (!publisher) {
        return res.send("no publisher present with the particular id ");
    }

    let bookCreated = await bookModel.create(book);
    return res.send({ data: bookCreated });
};

const getBooks = async function(req, res) {
    let books = await bookModel.find().populate("author publisher");
    res.send({ data: books });
};

const updateBooks = async function(req, res) {
    // condition 1
    let hardCoverPublishers = await publisherModel.find({
        name: { $in: ["Penguin", "HarperCollins"] },
    });
    let publisherIds = hardCoverPublishers.map((p) => p._id);
    //publisherIds is an array of publisher _id values

    await bookModel.updateMany({ publisher: { $in: publisherIds } }, { isHardCover: true });

    // conditon 2
    let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
    let authorIds = highRatedAuthors.map((a) => a._id);

    await bookModel.updateMany({ author: { $in: authorIds } }, { $inc: { price: 10 } });

    let updatedBooks = await bookModel.find();
    res.send({ updatedBookCollection: updatedBooks });
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.updateBooks = updateBooks;