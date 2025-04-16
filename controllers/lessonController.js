import Lesson from '../models/Lesson.js'

export const createLesson = async (req, res) => {
    try {
        const newLesson = await Lesson.create(req.body)
        res.status(201).json(newLesson)
    } catch (error) {
        console.error('Error creating lesson:', error.message)
        res.status(500).json({ error: 'Failed to create lesson' })
    }
}

export const getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find()
        res.status(200).json(lessons)
    } catch (error) {
        console.error('Error fetching lessons:', error.message)
        res.status(500).json({ error: 'Failed to fetch lessons' })
    }
}

export const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id)
        if (!lesson) return res.status(404).json({ error: 'Lesson not found' })
        res.status(200).json(lesson)
    } catch (error) {
        console.error('Error fetching lesson:', error.message)
        res.status(500).json({ error: 'Failed to fetch lesson' })
    }
}

export const updateLesson = async (req, res) => {
    try {
        const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedLesson) return res.status(404).json({ error: 'Lesson not found' })
        res.status(200).json(updatedLesson)
    } catch (error) {
        console.error('Error updating lesson:', error.message)
        res.status(500).json({ error: 'Failed to update lesson' })
    }
}

export const deleteLesson = async (req, res) => {
    try {
        const deletedLesson = await Lesson.findByIdAndDelete(req.params.id)
        if (!deletedLesson) return res.status(404).json({ error: 'Lesson not found' })
        res.status(200).json({ message: 'Lesson deleted successfully' })
    } catch (error) {
        console.error('Error deleting lesson:', error.message)
        res.status(500).json({ error: 'Failed to delete lesson' })
    }
}
