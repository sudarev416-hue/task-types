/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type str = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};
type arrs = str[];
export function getPersons(): arrs;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
export function personToString(
    person:
        | { age: number; gender: string; name: string }
        | { age: number; gender: string; name: string; company: string },
): string;
