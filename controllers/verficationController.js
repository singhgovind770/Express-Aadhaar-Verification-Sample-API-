require('dotenv').config();
const { config } = require("dotenv");
const { MongoClient } = require("mongodb");
const uri = process.env.DB_URL
const client = new MongoClient(uri);


//Note:- To quering in database I have added a addtional field aadhaarNumber with their Value in given data.
// My Database and Collection Name is "api"


async function otp(req, res) {
    try {
        if(req.body.aadhaarNumber){
            const result = await client.db("api").collection("api").findOne({ aadhaarNumber: req.body.aadhaarNumber });
            if (result) {

                //Here We can create otp through otp services like twillo, exotel, etc or Maually if it is need to implement
                //please lets us know ASAP.

                res.json({
                    "status": "SUCCESS",
                    "message": "OTP sent successfully",
                    "ref_id": "21637861"
                })
            }
            else {
                res.json({
                    "ref_id": "208",
                    "status": "INVALID",
                    "message": "Invalid Aadhaar Card"
                })
            }
        }
        else {
            res.json({
                "status": "INVALID",
                "message": "Invalid Payload"
            })
        }

    } catch (err) {
        res.json({
            "status": "INVALID",
            "message": "oops error occured"
        })
    }
}



async function verify(req, res) {
        try{
            
            const otp = (parseInt(req.body.otp)===1111) // Here I created the Test Otp

            if(otp){
    
                //for Sample Here i am passing a existing aadhaarNumber in database to fetch the details for true otp.
                //if manaul otp creation funtionality is needed to implement please let's know ASAP. 
                const result = await client.db("api").collection("api").findOne({ aadhaarNumber: 123412341234 });
                if (result) {
                    res.json({
                        "status": "VALID",
                        "message": "Aadhaar Card Exits",
                        "ref_id": "21637861",
                        "care_of":result.care_of,
                        "dob":result.dob,
                        "email":result.email,
                        "gender":result.gender,
                        "name":result.name,
                        "photo_link":result.photo_link,
                        "mobile_hash":result.mobile_hash,
                        "split_address":result.split_address,
                        "year_of_birth":result.year_of_birth
                    })
                }
                else {
                    res.json({
                        "ref_id": "208",
                        "status": "INVALID",
                        "message": "Invalid Otp"
                    })
                }

        
            }
            else {
                res.json({
                    "status": "INVALID",
                    "message": "Invalid Payload"
                })
            }

        }catch(err){
                res.json({
                    "status": "INVALID",
                    "message": "Error occured"
                })
        }
    }

module.exports = { otp, verify }