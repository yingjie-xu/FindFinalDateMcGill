import data from "../Assets/washed.json";

export const checkExist = course => {
    return data.map(e => e['COURSE NUMBER']).includes(course);
};