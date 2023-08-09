window.onload = function () {
    let id_text_requirenents = document.getElementById("id_text_requirenents");
    let id_text_offers = document.getElementById("id_text_offers");
    let id_text_viewing = document.getElementById("id_text_viewing");
    let id_text_case_study = document.getElementById("id_text_case_study");
    let id_text_presentation = document.getElementById("id_text_presentation");

    let show = function(entity) {
        entity.classList.add("method_text_show");
        entity.classList.remove("method_text_hide");
    }

    let hide = function(entity) {
        entity.classList.remove("method_text_show");
        entity.classList.add("method_text_hide");
    }

    let hide_list = function(to_hide) {
        to_hide.forEach(function (item, index, array) {
            hide(item);
          });
    }

    toggleMethod = function (event) {
        window.console.log(event.target.id + " was clicked");
        window.console.log(event.target.id);
        switch (event.target.id) {
            case "id_requirenents":
                show(id_text_requirenents);
                hide_list([id_text_offers, id_text_viewing, id_text_case_study, id_text_presentation]);
                break;
            case "id_offers":
                show(id_text_offers);
                hide_list([id_text_requirenents, id_text_viewing, id_text_case_study, id_text_presentation]);
                break;
            case "id_viewing":
                show(id_text_viewing);
                hide_list([id_text_requirenents, id_text_offers, id_text_case_study, id_text_presentation]);
                break;
            case "id_case_study":
                show(id_text_case_study);
                hide_list([id_text_requirenents, id_text_offers, id_text_viewing, id_text_presentation]);
                break;
            case "id_presentation":
                show(id_text_presentation);
                hide_list([id_text_requirenents, id_text_offers, id_text_viewing, id_text_case_study]);
                break;
        }

    }

    window.console.log("Starting");
    document.getElementById("id_requirenents").addEventListener('click', toggleMethod, true);
    document.getElementById("id_offers").addEventListener('click', toggleMethod, true);
    document.getElementById("id_viewing").addEventListener('click', toggleMethod, true);
    document.getElementById("id_case_study").addEventListener('click', toggleMethod, true);
    document.getElementById("id_presentation").addEventListener('click', toggleMethod, true);
}