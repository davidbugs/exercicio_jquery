$(document).ready(function() {

function addTask(taskName) {
    if (taskName !== '') {
        var listItem = $('<li>').text(taskName);
        listItem.on('click', function () {

            $(this).toggleClass('completed');
        });

        $('.check').append(listItem);

        $("input[name='taskName']").val('');
    }
}   

$('#taskForm').on('submit', function(e){
    e.preventDefault();
    var taskName = $("input[name='taskName']").val();
    addTask(taskName);
});
});