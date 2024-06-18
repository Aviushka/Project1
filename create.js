const fs = require('fs');
const path = require('path');

function generateNote(id) {
    return {
        id: id,
        title: `Note ${id}`,
        author: {
            name: `Author ${id}`,
            email: `mail_${id}@gmail.com`
        },
        content: `Content for note ${id}`
    };
}

function createNotesFile(numNotes, filePath) {
    const notes = [];
    for (let i = 1; i <= numNotes; i++) {
        notes.push(generateNote(i));
    }

    const data = { notes: notes };

    fs.writeFile(filePath, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`${numNotes} notes have been written to ${filePath}`);
        }
    });
}

// Input
const numNotes = parseInt(process.argv[2], 10);
const filePath = path.join(__dirname, 'data', 'notes.json');

// Create the file
createNotesFile(numNotes, filePath);
