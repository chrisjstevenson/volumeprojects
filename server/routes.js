var viewController = require('./controllers/viewController');

module.exports = function (app) {
    app.get('/', viewController.index);
    app.get('/forthcoming', viewController.forthcoming);
    app.get('/information', viewController.information);
    app.get('/contact', viewController.contact);
}