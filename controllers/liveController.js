const Review = require('../models/review');
const Teacher = require('../models/teacher');
const Live = require('../models/class');


// Creation of TEACHER
module.exports.createTeacher = (req, res) => {
    const {email,name} = req.body;
    const teacher = new Teacher({
        email: email,
        name: name
    })
    teacher.save().then((teacher) => {
        res.status(200).json({
            "message": "teacher data inserted in the db",
            "data": teacher
        })
    }).catch((err) => {
        if(err) {
            res.status(400).json({
                "message": "Unable to add a teacher"
            })
        }
    })
}



// Creation of RATING
module.exports.createRating = async (req,res) =>{
    // const {teacherName, rating} = req.body;
    Teacher.findOne({name: req.body.teacherName}, (err, teacher) => {
        if(err){
            res.status(401).json({
                "message": "error in searcing for a teacher"
            })
        }
        if(!teacher){
            res.status(404).json({
                "message": "teacher not found!"
            })
        }
        if(teacher){
            const newRating = new Review({
                teacher: req.body.teacherName,
                rating: req.body.rating
            });
            newRating.save().then((rating) => {
                res.status(200).json({
                    "message": "rating data inserted in the db",
                    "data": rating
                })
            }).catch((err) => {
                if(err) {
                    res.status(400).json({
                        "message": "Unable to add a rating"
                    })
                }
            })
        }
    })
}



// Creation of REVIEW
module.exports.createReview = async(req,res) =>{
    Teacher.findOne({name: req.body.teacherName},(err,teacher) =>{
        if(err){
            res.status(401).json({
                "message": "error in searcing for a teacher"
            })
        }
        if(!teacher){
            res.status(404).json({
                "message": "teacher not found!"
            })
        }
        if(teacher){
            const newReview = new Review({
                teacher: req.body.teacherName,
                review: req.body.review
            });
            newReview.save().then((review) =>{
                res.status(200).json({
                    "message":"review data stored in db",
                    "data": review
                })
            }).catch((err) =>{
                if(err){
                    res.status(400).json({
                        "message": "Unable to create a review"
                    })
                }
            })
        }
    })
}



// Creation of LIVE CLASS
module.exports.createLiveClass = async(req,res) =>{
    const {title,price,description,author,rating,review} = req.body;
    const classes = new Live({
        title:title,
        price:price,
        description:description,
        author:author,
        rating:rating,
        review: review
    })
    classes.save().then((classes) =>{
        res.status(200).json({
            "message": "class data stored in the db",
            "data": classes
        })
    }).catch((err) => {
        if(err) {
            res.status(400).json({
                "message": "Unable to create a class"
            })
        }
    })
}


// SEARCHING of LIVE CLASS

module.exports.searchliveClass = async(req,res)=>{
    Live.findOne({title: req.body.title},(err,title) =>{
        if(err){
            res.status(401).json({
                "message":"error in finding the title"
            })
        }
        if(!title){
            res.status(404).json({
                "message":"title not found"
            })
        }
        if(title){
            const searchedCourse = new Live({
                title: req.body.title,
                price:req.body.price,
                // image: req.body.image,
                description: req.body.description,
                rating: req.body.rating,
                review: req.body.review,
                author: req.body.author,
                location: req.body.location
            });
            searchedCourse.save().then((course) =>{
                res.status(200).json({
                    "message":"Course stored in db",
                    "data":course
                })
            }).catch((err) =>{
                if(err){
                    res.status(400).json({
                        "message":"Unable to find the course"
                    })
                }
            })
        }
    })
} 










