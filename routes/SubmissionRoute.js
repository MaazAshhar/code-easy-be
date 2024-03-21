import { Router } from "express";
import { addSubmission, deleteSubmission, findAllSubmission } from "../controllers/SubmissionController.js";


const router=Router();

router.post('/submission', addSubmission);
router.get('/submission', findAllSubmission);
router.delete('/submission/:id', deleteSubmission);


export default router;