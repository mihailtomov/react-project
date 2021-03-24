const router = require('express').Router();
const articlesService = require('../services/articlesService');

router.get('/', (req, res) => {
    articlesService.getAll()
        .then(articles => {
            res.status(200).json({ articles });
        })
});

router.post('/', (req, res) => {
    articlesService.create(req.body)
        .then(createdArticle => {
            res.status(201).json({ _id: createdArticle._id });
        })
        .catch(err => console.log(err));
});

router.get('/:articleId', (req, res) => {
    const { articleId } = req.params;

    articlesService.getOne(articleId)
        .then(article => {
            res.status(200).json(article);
        })
        .catch(err => console.log(err));
});

module.exports = router;