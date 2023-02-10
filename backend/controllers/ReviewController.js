import Review from "../models/Review.js";
 
export const getReviews = async (req, res) => {
    try {
        const review = await Review.find({});
        res.status(200).json({result: review });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const addReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(200).json({result: review });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
