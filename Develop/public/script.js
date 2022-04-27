const $noteHeader = $(".note-title");
const $noteText = $(".note-textarea");
const $newBtn = $(".new-note");
const $listNote = $(".list-container .list-group");
const $saveBtn = $(".save-note");

const activeNote ={};

const getNotes = function(){
    return $.ajax({
        url : "/api/notes",
        method: "GET"
    });
};

const saveNote = function(){
    return $.ajax({
        url : "/api/notes",
        data: NodeIterator,
        method: "POST"
    });
};

const deleteNote = id =>{
    return $.ajax({
        url: "api/notes/", id,
        method: "DELETE"
    });
};

const renderActiveNote = function(){
    $saveBtn.hide();

    if(activeNote.id){
        $noteHeader.attr("readonly", true);
        $noteText.attr("readonly", true);
        
    }
}

