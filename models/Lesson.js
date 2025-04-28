import mangoose from "mongoose"

const lessonSchema = new mangoose.Schema({
    instructionId: {
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
    imageBuffer: {
        type: Buffer,
        required: false,
    },
    difficultyLevel: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Lesson = mangoose.model('Lesson', lessonSchema)
export default Lesson