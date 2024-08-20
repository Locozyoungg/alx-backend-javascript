// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort();

        sortedFields.forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        res.status(200).send(response.trim());
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((fields) => {
        const students = fields[major];
        if (students) {
          res.status(200).send(`List: ${students.join(', ')}`);
        } else {
          res.status(200).send('List: ');
        }
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;
