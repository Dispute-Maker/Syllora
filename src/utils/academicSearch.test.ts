import test from 'node:test';
import assert from 'node:assert/strict';
import { filterAcademicResources, calculateSemesterTotalCredits } from './academicSearch';
import { MOCK_RESOURCES, SUBJECTS, COURSES } from '../data/mockData';

test('filterAcademicResources filters by semester', () => {
  const sem1Resources = filterAcademicResources(MOCK_RESOURCES, SUBJECTS, { semesterId: 1 });
  assert.ok(sem1Resources.length > 0);
  assert.ok(sem1Resources.every(r => r.semesterId === 1));
});

test('filterAcademicResources filters by type', () => {
  const pyqs = filterAcademicResources(MOCK_RESOURCES, SUBJECTS, { type: 'pyq' });
  assert.ok(pyqs.length > 0);
  assert.ok(pyqs.every(r => r.type === 'pyq'));
});

test('filterAcademicResources keyword search finds matching topics', () => {
  const bstResults = filterAcademicResources(MOCK_RESOURCES, SUBJECTS, { query: 'BST' });
  assert.ok(bstResults.length > 0);
  assert.ok(bstResults.some(r => r.title.includes('Binary Search Trees')));
});

test('filterAcademicResources handles no matches gracefully', () => {
  const emptyResults = filterAcademicResources(MOCK_RESOURCES, SUBJECTS, { query: 'quantum-astrophysics-xyz' });
  assert.equal(emptyResults.length, 0);
});

test('calculateSemesterTotalCredits sums credits for MCA accurately', () => {
  const mcaCourse = COURSES.find(c => c.id === 'mca');
  assert.ok(mcaCourse);
  const total = calculateSemesterTotalCredits(mcaCourse.semesters);
  assert.equal(total, 92);
});
