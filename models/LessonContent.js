import mangoose from "mongoose"

const lessonContentSchema = new mangoose.Schema({
    lessonId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const LessonContent = mangoose.model('lessonContent', lessonContentSchema)
export default LessonContent