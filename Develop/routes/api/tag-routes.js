const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {


});

router.get('/:id', (req, res) => {
  
});

router.post('/', (req, res) => {
  try {
    const productRoutes = await Product.destroy({}
      where: {
        id: req.params.id
      }
      });

  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  try {
    const productRoutes = await Product.destroy({}
      where: {
        id: req.params.id
      }
      });

  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
