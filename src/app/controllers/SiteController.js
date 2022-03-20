
class SiteController {

    index(req, res) {
        res.render('home')
    }

    sign_in(req, res) {
        res.render('sign_in')
    }

    sign_up(req, res) {
        res.render('sign_up')
    }

}

module.exports = new SiteController()
