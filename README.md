# Aadhaar Verification API
This is a sample Express API with MongoDB integration for verifying Aadhaar cards and generating OTPs.

# Prerequisites

To run this API locally, you will need:

 - Node.js installed on your machine
 - A MongoDB Atlas account or a locally installed MongoDB instance
 - An API testing tool such as Postman or Insomnia
 
# Installation
  1. Clone the repository
  2. Install the dependencies using `npm install`
  3. Create a `.env` file in the root directory and add the following environment variables
  
     PORT=6001
     DB_URL=<MongoDB Connection String>
  
  4. Start the server by running `npm start`
  5. The server should now be running at `http://localhost:6001`
  
# Endpoints
  # GET /
  A simple endpoint to check if the server is running.

  # POST /verification/aadhaar
  This endpoint generates an OTP and sends it to the mobile number associated with the given Aadhaar number.
  
  Request Payload:
  {
  "aadhaarNumber": "123412341234"
  }
  
  Response Payload:
  {
  "status": "SUCCESS",
  "message": "OTP sent successfully",
  "ref_id": "21637861"
  }
  
  # POST /verification/otp
  This endpoint verifies the OTP and returns the details of the Aadhaar card if the OTP is valid.

  Request Payload:
  {
  "aadhaarNumber": "123412341234",
  "otp": "1111"
  }
  
  Response Payload:
  {
  "status": "VALID",
  "message": "Aadhaar Card Exits",
  "ref_id": "21637861",
  "care_of": "John Doe",
  "dob": "01-01-2000",
  "email": "johndoe@example.com",
  "gender": "Male",
  "name": "John Doe",
  "photo_link": "<Link to Aadhaar card photo>",
  "mobile_hash": "<Hashed Mobile Number>",
  "split_address": {
    "house": "123",
    "street": "Main Street",
    "lm": "Near Park",
    "loc": "Locality",
    "vtc": "City",
    "subdist": "Sub District",
    "dist": "District",
    "state": "State",
    "pc": "123456"
  },
  "year_of_birth": "2000"
  }

# Note
  - The Aadhaar card details used in this sample are for testing purposes only.
  - The API does not actually send OTPs. It returns a success response regardless of the OTP entered in the request payload.
  - The API returns the details of the Aadhaar card only if the OTP entered in the request payload is 1111.
  - The database and collection names used in this sample are api and api, respectively. Please adjust them as needed.




