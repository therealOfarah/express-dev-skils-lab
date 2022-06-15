import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillsSchema = {
  Text: String,
  Ability: Boolean
}



Skills = mongoose.Schema("Skills", skillsSchema)

export {
  Skills
}