const User = require("./model");
const { redirect } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getUser = async (req, res) => {
  User.findOne({ username: req.body.username })

    // if user name exists
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

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
// Update User

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      User.updateOne(
        { _id: id },
        {
          $set: {
            username: req.body.username,
            password: hashedPassword
          }
        }
      )
        .then((result) => {
          if (result.modifiedCount > 0) {
            res.status(200).send({
              message: "User updated successfully",
              result,
            });
          } else {
            res.status(404).send({
              message: "User not found",
            });
          }
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error updating user",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};
