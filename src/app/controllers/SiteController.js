
class SiteController {

    index(req, res) {
        res.render('home')
    }

    account(req, res) {
        res.render('account')
    }

}

module.exports = new SiteController()
