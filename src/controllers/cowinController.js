let axios = require("axios")

let getOtp = async function(req, res){
try{
    let inputData = req.body
    if(inputData){
    let options = {
        method : "POST",
        url : "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        data : inputData
    }
    let result = await axios(options)
    res.status(200).send({status: true, msg: result.data})
}else{
    res.status(400).send({status: false, msg:"please provide input data"})
}
}catch (err) {
    res.status(500).send({error: err.message})
}
}

let sessionsByDistrict = async function (req, res){
    try{
        let dis = req.query.district_id
        let date = req.query.date
      if(dis && date){

        let options = {
            method: "GET",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dis}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({status: true, msg: result.data})

      }else{
          res.status(400).send({status: false, msg: "please provide the input"})
      }  

    }catch (error){
        res.status(500).send({error: error.message})
    }
}


module.exports.getOtp = getOtp
module.exports.sessionsByDistrict = sessionsByDistrict