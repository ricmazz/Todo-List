// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(() => {
    $('#txtTarefa').focus();
});

PressKey = function (evento) {
    if (evento.keyCode == 13 && $('#txtTarefa').val() != undefined && $('#txtTarefa').val() != '') {
        let textoEscrito = $('#txtTarefa').val();
        let strHtmlLi = '<li id="idTarefa' + $('.ulTarefas li').length + '">';

        strHtmlLi += '<input type="checkbox" id="chkTarefa' + $('.ulTarefas li').length + '" onchange="SelecionarTarefa(\'idTarefa' + $('.ulTarefas li').length + '\');" style="vertical-align: middle; cursor: pointer;" /><label for="chkTarefa' + $('.ulTarefas li').length + '">&nbsp;</label>';
        strHtmlLi += '<span class="pl-2 tarefa" style="vertical-align: middle; text-transform: uppercase;">' + $('#txtTarefa').val() + '</span>';
        strHtmlLi += '<a class="pl-2" onclick="RemoverTarefa(\'idTarefa' + $('.ulTarefas li').length + '\');" style="vertical-align: middle; cursor: pointer;">' + '<span class="material-icons">delete</span>' + '</a>';

        strHtmlLi += '</li>';

        $('.ulTarefas').append(strHtmlLi);

        $('#txtTarefa').val('');
        $('#txtTarefa').focus();
    }
}

RemoverTarefa = function (idElemento) {
    var elemento = $('#' + idElemento);
    elemento.remove();
}

SelecionarTarefa = function (idElemento) {
    if ($('#' + idElemento).find(':checkbox').prop('checked')) {
        $('#' + idElemento).find('.tarefa').css('text-decoration', 'line-through');
    }
    else {
        $('#' + idElemento).find('.tarefa').css('text-decoration', '');
    }
}