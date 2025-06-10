import path from "path";

const get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '',});
};

const ErrorController = {
  get404
};

export default ErrorController;