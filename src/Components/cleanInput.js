export const cleanInput = course => {
    return course.replace(/  +/g, ' ') //handle input with multiple space
    .replace(/([A-z]{4})(\d)/, '$1 $2') //handle input without space
    .toUpperCase();
};