const createRoutesByEntity = (crrRoutes, entityController) => {
  crrRoutes.get('/', entityController.readAll);
  crrRoutes.get('/:id', entityController.readOne);
  crrRoutes.post('/', entityController.createOne);
  crrRoutes.put('/:id', entityController.updateOne);
  crrRoutes.delete('/:id', entityController.deleteOne);
};

module.exports = createRoutesByEntity;
