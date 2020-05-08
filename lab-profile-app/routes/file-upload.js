const express = require('express');
const router  = express.Router();
const User = require('../models/user-model')

// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup');



router.post('/upload', uploader.single("imageUrl"), (request, response, next) => {
    console.log('file is: ', request.file)

    // router.post("/edit/:id", (req, res, next) => {
    //   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //     res.status(400).json({ message: "Specified id is not valid" });
    //     return;
    //   }
    
    //   User.findByIdAndUpdate(req.params.id, { $set: {imageUrl: request.file.secure_url} })
    //     .then(() => {
    //       console.log('DENTRO DO THEN');
    //       res.json({
    //         message: `Photo with ${req.params.id} is updated successfully.`,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log('erro aqui!!!!');

    //       res.json(err);
    //     });
    // });

    if (!request.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    // get secure_url from the file object and save it in the 
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    response.json({ secure_url: request.file.secure_url });
})



module.exports = router;
