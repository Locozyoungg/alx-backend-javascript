import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

test('getListStudentIds returns an empty array for non-array input', () => {
  expect(getListStudentIds("hello")).toEqual([]);
});

test('getListStudentIds returns an array of ids for a valid student list', () => {
  expect(getListStudentIds(getListStudents())).toEqual([1, 2, 5]);
});
