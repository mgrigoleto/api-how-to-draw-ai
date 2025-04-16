import LessonContent from '../models/LessonContent.js'

export const createLessonContent = async (req, res) => {
    try {
        const newLessonContent = await LessonContent.create(req.body)
        res.status(201).json(newLessonContent)
    } catch (error) {
        console.error('Error creating lessonContent:', error.message)
        res.status(500).json({ error: 'Failed to create lessonContent' })
    }
}

export const getAllLessonContents = async (req, res) => {
    try {
        const lessonContents = await LessonContent.find()
        res.status(200).json(lessonContents)
    } catch (error) {
        console.error('Error fetching lessonContents:', error.message)
        res.status(500).json({ error: 'Failed to fetch lessonContents' })
    }
}

export const getLessonContentById = async (req, res) => {
    try {
        const lessonContent = await LessonContent.findById(req.params.id)
        if (!lessonContent) return res.status(404).json({ error: 'LessonContent not found' })
        res.status(200).json(lessonContent)
    } catch (error) {
        console.error('Error fetching lessonContent:', error.message)
        res.status(500).json({ error: 'Failed to fetch lessonContent' })
    }
}

export const updateLessonContent = async (req, res) => {
    try {
        const updatedLessonContent = await LessonContent.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedLessonContent) return res.status(404).json({ error: 'LessonContent not found' })
        res.status(200).json(updatedLessonContent)
    } catch (error) {
        console.error('Error updating lessonContent:', error.message)
        res.status(500).json({ error: 'Failed to update lessonContent' })
    }
}

export const deleteLessonContent = async (req, res) => {
    try {
        const deletedLessonContent = await LessonContent.findByIdAndDelete(req.params.id)
        if (!deletedLessonContent) return res.status(404).json({ error: 'LessonContent not found' })
        res.status(200).json({ message: 'LessonContent deleted successfully' })
    } catch (error) {
        console.error('Error deleting lessonContent:', error.message)
        res.status(500).json({ error: 'Failed to delete lessonContent' })
    }
}
