import {addNewStudents, getStudentList, getStudentById, updateStudent, deleteStudent} from  '../controllers/studentControllers';

const routes = (app) => {
    app.route('/student')
    .get(getStudentList)
    .post(addNewStudents);

    app.route('/student/:studentId')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent)
}

export default routes;