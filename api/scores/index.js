const router = require("express").Router();

const ScoresModel = require("./ScoresModel");


router.get("/", async (req, res, next) => {
    try {
        const items = await ScoresModel.find().sort({score: "DESC"});
        res.json(items);
    } catch (error) {
        next(error);
    }
});

router.post("/", async(req, res, next) => {
    try {
        const entry = new ScoresModel(req.body);
        const item = await entry.save();

        res.json(item);
    }catch(error){
        next(error);
    }
});

router.get("/top", async(req, res, next) => {
    try {
        const items = await ScoresModel.find().sort({score: "DESC"}).limit(50);
        res.json(items);
    } catch (error) {
        next(error);
    }
})

router.get("/search/:q", async (req, res, next) => {
    try {
        const items = await ScoresModel.find({name: { $regex: req.params.q }}).sort({score: "DESC"}).limit(20);

        res.json(items);
    } catch (error) {
        next(error);
    }
})

module.exports = router;