const User = require('./model');
const { redirect } = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
exports.getUser = async (req, res) => {
  User.findOne({ username: req.body.username })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Username not found",
        e,
      });
    });
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    // get all users
    const users = await User.find();
    // return success response
    res.status(200).send({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    // return error response
    res.status(500).send({
      message: "Error fetching users",
      error,
    });
  }
};


// register endpoint
exports.registerUser = (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        username: request.body.username,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};


// const Task = require('./model');

// // POST Request
// exports.addUser = async (req, res) => {

//     try {
//         // get the task from the body
//         const taskData = await req.body;
//         //create a new task then save
//         await Task.create(taskData)
//             .then((createdTask) => {
//                 if (!createdTask) return res.status(404)
//                     .json({
//                         success: false,
//                         message: "Task creation failed",
//                         error: "Unable get created task"
//                     })
//                 res.status(201)
//                     .json({
//                         success: true,
//                         createdTask
//                     })
//             })
//             .catch((error) => {
//                 res.status(404)
//                     .json({
//                         success: false,
//                         error: error.message
//                     })
//             })
//     } catch (error) {
//         res.status(500)
//             .json({
//                 success: false,
//                 message: "Internal server error"
//             })
//     }
// }


