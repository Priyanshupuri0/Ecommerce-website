const User = require('./model');
const {redirect} = require('express');
exports.getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      res.redirect('/Vendor');
    } else {
      res.redirect('/Admin');
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
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


