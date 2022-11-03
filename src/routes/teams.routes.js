import { Router } from "express";
import {
  getTeam,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam
} from "./../controllers/teams.controller.js";


const router = Router();

router.get('/teams', getTeams);

router.get('/teams/:id', getTeam);

router.post('/teams', createTeam);

router.patch('/teams/:id', updateTeam);

router.delete('/teams/:id', deleteTeam);

export default router;