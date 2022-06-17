import { Skill } from "../model/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function newSkill(req,res){
    res.render("skills/new")
}
function create(req,res){
  Skill.create(req.body)
  .then(skills=>{
    res.redirect("/skills")
  })
  .catch(error =>{
    res.redirect('/skills')
  })
}
function show(req,res){
  Skill.findById(req.params.id)
  .then(skill =>{
    res.render("skills/show",{
      skill:skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req,res){
  Skill.findByIdAndDelete(req.params.id)
  .then(skill=>{
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function update(req,res){
  req.body.ability = !!req.body.ability
  Skill.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(skill=>{
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export{
  index,
  newSkill as new,
  create,
  show,
  edit,
  deleteSkill as delete,
  update,
}