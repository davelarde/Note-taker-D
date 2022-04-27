const fs= require("fs")
const notesData = getNotes();

function getNotes(){
    const data = fs.readFileSync("./db/db.json", "utf-8");

    const notes = JSON.parse(data);

    for (let i = 0; i < notes.length; i++) {
        notes[i].id ='' + i;
        
    }
return notes ;

}

module.exports = app =>{

    app.get("/api/notes", (req, res)=>{
        notesData = getNotes();
        res.json(notesData);
    });

    app.post("/api/notes", (req, res)=>{
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteData), 'utf-8');
        res.json(true);
    });

    app.delete("/api/notes/:id", (req , res)=>{
        const requestID = req.params.id;
        console.log(requestID);

        const note = noteData.filter(note =>{
            return note.id === requestID

        })[0];

        const index = notesData.indexOf(note);
        notesData.splice(index, 1);

        fs.writeFileSync('./db/db.json', JSON.stringify(noteData), 'utf-8');
        res.json("Note deleted!");
    });
}