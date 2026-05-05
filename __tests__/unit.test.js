// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber accepts (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber accepts 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber rejects 12-34-56', () => {
  expect(isPhoneNumber('12-34-56')).toBe(false);
});
test('isPhoneNumber rejects "hello"', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

// isEmail
test('isEmail accepts ajay@ucsd.edu', () => {
  expect(isEmail('ajay@ucsd.edu')).toBe(true);
});
test('isEmail accepts foo@bar.io', () => {
  expect(isEmail('foo@bar.io')).toBe(true);
});
test('isEmail rejects missing @', () => {
  expect(isEmail('ajay.ucsd.edu')).toBe(false);
});
test('isEmail rejects missing TLD', () => {
  expect(isEmail('ajay@ucsd')).toBe(false);
});

// isStrongPassword
test('isStrongPassword accepts Abcd123', () => {
  expect(isStrongPassword('Abcd123')).toBe(true);
});
test('isStrongPassword accepts a_strong_pw', () => {
  expect(isStrongPassword('a_strong_pw')).toBe(true);
});
test('isStrongPassword rejects starting with number', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('isStrongPassword rejects too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate accepts 1/1/2026', () => {
  expect(isDate('1/1/2026')).toBe(true);
});
test('isDate accepts 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('isDate rejects 1-1-2026', () => {
  expect(isDate('1-1-2026')).toBe(false);
});
test('isDate rejects two-digit year', () => {
  expect(isDate('1/1/26')).toBe(false);
});

// isHexColor
test('isHexColor accepts #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor accepts ABCDEF', () => {
  expect(isHexColor('ABCDEF')).toBe(true);
});
test('isHexColor rejects #ggg', () => {
  expect(isHexColor('#ggg')).toBe(false);
});
test('isHexColor rejects 4 chars', () => {
  expect(isHexColor('#abcd')).toBe(false);
});
