import * as studentService from '../services/studentServices.js';

export const fetchAllstudent = async(req, res) => {
    const student = await studentService.fetchAllstudent();
    res.status(200).json(student);
};

export const createStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const updateStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const { id } = req.params;
    const student = { id, name, srcode, program };

    try {
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    }catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

