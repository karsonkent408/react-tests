import mongoose from "mongoose";

export interface IProject extends mongoose.Document {
    name: string;
    description: string;
}

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const Project = mongoose.model<IProject>("Project", projectSchema);

