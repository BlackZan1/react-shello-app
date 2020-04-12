const STORAGE_NAME = 'shelloData';

export const saveData = (data) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
}

export const getData = () => {
    return JSON.parse(localStorage.getItem(STORAGE_NAME) || '{ "boards": [] }');
}

export const deleteData = () => {
    localStorage.removeItem(STORAGE_NAME);
}