import express from 'express'
import {
    createLessonContent,
    getAllLessonContents,
    getLessonContentById,
    updateLessonContent,
    deleteLessonContent
} from '../controllers/lessonContentController.js'

const router = express.Router()

router.post('/', createLessonContent)
router.get('/', getAllLessonContents)
router.get('/:id', getLessonContentById)
router.put('/:id', updateLessonContent)
router.delete('/:id', deleteLessonContent)

export default router
