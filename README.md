# Tokopedia Play Backend Clone
___
Backend application that provides you video data, product based on the video, and comments on that video. Created by Yoga Prambudi Sunaryudanto Putro - 2023

# Installation
___
1. Make Sure you have [Node.js](https://nodejs.org/) and  [MongoDB](https://www.mongodb.com/try/download/community) Installed.
2. In This Dir, type the command below to run the app. Make sure port 3000 in your local machine is not used.
    ```
        cd GG3.0-Midterm-YogaPrambudiSP
        npm i
        npm start
    ```
3. You can accesss the app through http://localhost:3000/
# Database
___
The Mongo database consists with 3 Collection which is Video,Product and Comments.

Video Schema
```
    videoID:{
        required: true,
        type: String
    },
    thumbnailURL:{
        required:true,
        type:String
    }
```
Product Schema
```
    productID:{
        required: true,
        type: String
    },
    videoID:{
        required: true,
        type: String
    },
    productURL:{
        required:true,
        type:String
    },
    productTitle:{
        required:true,
        type:String
    },
    productPrice:{
        required:true,
        type:String
    }
```
Comments Schema
```
    username:{
        required: true,
        type: String
    },
    videoID:{
        required: true,
        type: String
    },
    comment:{
        required:true,
        type:String
    },
    timestamp:{
        required:true,
        type:Date
    }
```
# API Structure
___
Video Object
```
{
  _id           :string
  videoID       :integer
  thumbnailURL  :string
}
```

Product Object
```sh
{
  _id           :string
  videoID       :integer
  thumbnailURL  :string
  productURL    :string
  productTitle  :string
  productPrice  :number
}
```
Comments Object
```sh
{
  _id           :string
  commendtID    :integer
  videoID       :integer
  username      :string
  comment       :string
  date          :datetime(iso 8601)
}
```


**GET /videos**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {<video_object>},
    {<video_object>},
    {<video_object>}
]
```

**GET /products/:id**
----
  Returns all products based on video id.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
```
{
       {<product_object>}
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : Error Message }`  `

**GET /comments/:id**
----
  Returns all comments based on video id.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
```
{
       {<comment_object>},
       {<comment_object>},
       {<comment_object>}
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : Error Message }`  `


**POST /comments/:id**
----
  Creates a new Comment based on the video id and returns the new object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    username: string,
    comment: string
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `"Sucess"` 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : Error Message }`  `

