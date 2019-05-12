// Display warning message.
function warning(message) {
    $('#warning-text').text(message);
    $('#warning-message').modal('show');
}

// Read names file from URL.
function readFile(input) {

    if (!(input.files && input.files[0])) {
        return false;
    }

    var reader = new FileReader();
    reader.onload = function(e) {

        $('#name-table-body').empty();

        // Check if name file has any contents
        let text = e.target.result;
        if (text.trim().length == 0)
        {
            warning('No names found in file. Try another.');
            return false;
        }

        // Check of text has any names
        let names = text.split(/[\r\n,]+/);
        if (names == null || names.length == 0)
        {
            warning('No names found in file. Try another.');
            return false;
        }

        // Add each to table
        names.forEach(function (name, index) {
            name = $.trim(name);
            if (name.length == 0)
            {
                return;
            }
            let fact = randomfacts.make(name);
            $('#name-table-body').append('<tr><th scope="row">' + 
                (index + 1) + '</th><td>' + name + '</td><td>' + fact + '</td></tr>');
        });

    };

    // Check that files have the correct extension.
    let filename = input.files[0];
    let extensions = filename.name.match(/\.(?:txt|csv)$/i);
    if (extensions == null || extensions.length == 0) {
        warning('Please upload only .txt or .csv files.');
        return false;
    }
    reader.readAsText(filename);
    
    // Clear out input field so same file can be used again.
    input.value = '';

}

// Check if drag and drop supported.
$(document).ready(function() {
    let div = document.createElement('span');
    if ((('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) &&
        ('FormData' in window) && ('FileReader' in window)) {
        $('.droppable').removeClass('d-none');
    }
});
