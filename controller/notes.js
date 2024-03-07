export const getNotes = (req, res) => {
    res.send('get all notes');
};

export const getNote = (req, res) => {
    res.send('get single note');
}; 

export const createNote = (req, res) => {
    res.send('create new note');
};

export const updateNote = (req, res) => {
    res.send('update note');
};

export const deleteNote = (req, res) => {
    res.send('delete note');
};