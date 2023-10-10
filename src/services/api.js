import axios from "axios";
const BASE_URL = "http://10.0.10.211:3300/api";

const ApiServices = {
  //
  //   HR registration API:
  // Method: Post
  // Endpoint: http://10.0.10.211:3300/api/register/hr
  // Endpoint: Input: name, email, password, company_name
  // Response:

  // {
  //     "message": "HR registered successfully",
  //     "user": {
  //         "id": 1,
  //         "hr_id": 1,
  //         "name": "zain",
  //         "email": "zain@gmail.com",
  //         "company_name": "i2c",
  //         "updated_at": "2023-10-10T04:53:38.000000Z",
  //         "created_at": "2023-10-10T04:53:38.000000Z"
  //     }
  // }

  //Hr registreration
  async hr_registeration(hrData) {
    const response = await axios.post(
      `${BASE_URL}/register/hr`,
      {
        name: hrData.name,
        email: hrData.email,
        password: hrData.password,
        company_name: hrData.company_name,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.data;
    return data;
  },

  //   User Login API:
  // Method: Post
  // Endpoint: http://10.0.10.211:3300/api/login
  // Endpoint: Input: email, password
  // Response:

  // 	{
  //     "message": "Login successful",
  //     "user_id": 1,
  //     "access_token": "1|2qkWWa1FBIN4lfpWdQEevinbkBBg9lWojnpS2UsUc81f45c4"
  // }

  //User Login
  async user_login(userData) {
    const response = await axios.post(`${BASE_URL}/login`, {
      email: userData.email,
      password: userData.password,
    });
    const data = await response.data;
    return data;
  },

  //   Candidate registration API:
  // Method: Post
  // Endpoint: http://10.0.10.211:3300/api/register/candidate
  // Endpoint: Input: name, email, password, phone_number
  // Response:

  // {
  //     "message": "Candidate registered successfully",
  //     "user": {
  //         "id": 4,
  //         "candidate_id": 3,
  //         "name": "fati",
  //         "email": "fati@gmail.com",
  //         "phone_number": "03234389900",
  //         "updated_at": "2023-10-10T05:39:05.000000Z",
  //         "created_at": "2023-10-10T05:39:05.000000Z"
  //     }
  // }

  //   User Regsteration
  async candidate_registeration(candidateData) {
    const response = await axios.post(
      `${BASE_URL}/register/candidate`,
      {
        name: candidateData.name,
        email: candidateData.email,
        password: candidateData.password,
        phone_number: candidateData.phone_number,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.data;
    return data;
  },

  //   User Logout API:
  // Method: Post
  // Endpoint: http://10.0.10.211:3300/api/logout
  // Endpoint: Input: none
  // Response:

  // {
  //     "message": "Logout Successfull"
  // }
  //User Logout
  async user_logout(token) {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    );
    const data = await response.data;
    return data;
  },
};

export default ApiServices;
