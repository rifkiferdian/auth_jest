const router = require("express").Router();
const UserController = require("../controllers/user");
// const GuestController = require("../controllers/guests");
// const authentication = require("../middlewares/authentication");


// router.get('/', async (req, res, next) => {
//     res.send('Selamat datang di API NodeJs...');
// });

router.get("/", UserController.getDataUser);

router.get('/login', async (req, res, next) => {
    res.send('Selamat datang di Halaman Login...');
});

// router.post("/login", UserController.login);
// router.post("/guest", GuestController.registerGuest);
// router.use(authentication);
// router.get("/guest", GuestController.getGuests);

module.exports = router;