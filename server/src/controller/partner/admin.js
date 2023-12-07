const upload = require("../../models/partner/upload");

exports.getShopsData = async (req, res) => {
  // console.log(req.params);
  try {
    const response = await upload.find();
    if (response.length > 0) {
      return res.status(200).json({
        data: { response },
        status: "success",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal problem" });
  }
};

exports.getSpecShopData= async(req, res) => {
    console.log(req.params);
    console.log(req.body);
    try{
        const response = await upload.find({p_id:req.params.id});
        if (response.length > 0) {
          return res.status(200).json({
            data: { response },
            status: "success",
          });
        }
    }catch(err){
        return res.status(500).json({ message: "Internal problem" });
    }
}