import { Router } from 'express'
import * as skillsCrtl from "../controller/skills.js"

const router = Router()


// GET localhost:3000/skills
router.get('/',skillsCrtl.index)
router.get('/new',skillsCrtl.new)
router.get("/:id",skillsCrtl.show)
router.get("/:id/edit",skillsCrtl.edit)
router.post('/',skillsCrtl.create)
router.delete('/:id',skillsCrtl.delete)
router.put('/:id',skillsCrtl.update)

export {
  router,
}
