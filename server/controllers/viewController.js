module.exports = {

    index: function (req, res) {
        res.render('index');
    },

    forthcoming: function(req, res) {
        res.render('forthcoming');
    },

    information: function(req, res) {
        res.render('information');
    },

    contact: function(req, res) {
        res.render('contact');
    }
}

