const httpStatus = require('http-status-codes')
exports.get404 = (req, res, next) => {
  res
    .status(httpStatus.StatusCodes.NOT_FOUND)
    .render('404', {
      pageTitle: 'Page Not Found',
      path: '/404',
      isAuthenticated: req.session.isLoggedIn
    });
};
