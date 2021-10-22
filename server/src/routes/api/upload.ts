import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();
// const jimp = require('jimp');

// async function mark(waterFile, originFile, targetFile, proportion = 5, marginProrortion = 0.01) {
//     const [water, origin] = await Promise.all([
//         jimp.read(waterFile),
//         jimp.read(originFile)
//     ])
//     const curProprotion = origin.bitmap.width / water.bitmap.width;
//     water.scale(curProprotion / proportion);
//     const right = origin.bitmap.width * marginProrortion;
//     const bottom = origin.bitmap.height * marginProrortion;
//     const x = origin.bitmap.width - right - water.bitmap.width;
//     const y = origin.bitmap.height - bottom - water.bitmap.height;

//     origin.composite(water, x, y, {
//         mode: jimp.BLEND_SOURCE_OVER,
//         opacitySource: .3,
//     })

//     await origin.write(targetFile)
// }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/img/", req.params.type));
  },
  filename: function (req, file, cb) {
    const timeStamp = Date.now();
    const randomStr = Math.random().toString(36).slice(-6);
    const ext = path.extname(file.originalname);
    const filename = `${timeStamp}-${randomStr}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
  limits: {
    fieldSize: 150 * 1024,
  },
  fileFilter(req, file, cb) {
    const extname = path.extname(file.originalname);
    const WhiteList = [".jpg", ".gif", ".png"];
    if (WhiteList.includes(extname)) {
      cb(null, true);
    } else {
      cb(new Error(`${extname} is not support`));
    }
  },
});

// const waterPath = path.resolve(__dirname, '../../public/resources/test.png')
router.post("/:type", upload.single("img"), async (req, res) => {
  // console.log(req.body)
  const url = `${req?.file?.filename}`;
  // const newPath = path.resolve(__dirname, '../../public/resources', req.file.filename)
  // await mark(waterPath, req.file.path, newPath)
  res.send({
    code: 0,
    msg: "",
    data: url,
  });
});

export default router;
