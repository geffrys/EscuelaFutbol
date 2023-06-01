import { Router } from "express";

import passport from "passport";
import { Jwt } from "jsonwebtoken";

import dotenv from "dotenv";
import Token from "../models/token";
dotenv.config();



const tokenRouter = Router();

tokenRouter.post('/', (req,res)=>{
    
})