import { Router } from 'express'
import * as skillsCrtl from "../controller/skills.js"

const router = Router()


// GET localhost:3000/skills
router.get('/',skillsCrtl.index)
router.get('/new',skillsCrtl.new)
router.post('/',skillsCrtl.create)
export {
  router,
}
