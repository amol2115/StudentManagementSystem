import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  enrollment: String,
});

export default mongoose.model('Student', studentSchema);
