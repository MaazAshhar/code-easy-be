import Submission from "../models/Submission.js";

export const addSubmission = async(req,res) => {
    try {
        const {username,language,stdin,sourceCode,stdout}=req.body;
        const newSubmission = await Submission.create({username,language,stdin,sourceCode,stdout});
        res.status(200).json({message:"submitted successfully"});
    } catch (error) {
        console.log('error in creating submission',error);
        res.status(400).json({message:"error in creating submission"});
    }

}

export const findAllSubmission = async(req,res) => {
    try {
        const submissions = await Submission.findAll({
            order:[['createdAt','DESC']]
        });

        res.status(200).json({
            submissions
        });

    } catch (error) {
        console.log("error in getting data",error);
        res.status(400).json({message:"error in getting data"});
    }
}

export const deleteSubmission = async(req,res) => {
    try {
        const id = req.params.id;
        const submission = await Submission.findByPk(id);
        if(!submission){
            res.status(404).json({ error: 'User not found' });
            return;
        }
        await submission.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error deleting user' });
    }
}