const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const lopRoute = require('./lop.route');
const sinhvienRoute = require('./sinhvien.route');
const apparelRoute = require('./apparel.route');
const productRoute = require('./product.route');
const categoriesRoute = require('./categories.route');


const docsRoute = require('./docs.route');


const config = require('../../config/config');



const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/lop',
    route: lopRoute,
  },

  {
    path: '/sinhvien',
    route: sinhvienRoute,
  },

  {
    path: '/apparel',
    route: apparelRoute,
  },

  {
    path: '/product',
    route: productRoute,
  },

  {
    path: '/categories',
    route: categoriesRoute,
  }

 ];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
