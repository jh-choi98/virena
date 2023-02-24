import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Virena";
  res.locals.loggedInUser = req.session.user || {};
  console.log(res.locals);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login");
  }
  return next();
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }
  return next();
};

export const avatarUploadMiddleware = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000,
  },
});

export const videoUploadMiddleware = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  },
});
