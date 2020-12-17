<?php

function getLastURL(){
    return $_SERVER['HTTP_REFERER'];
}

function getLastPage(){
    return explode("pages/",getLastURL())[1];
}

function returnErrorToLastPage($errorMessage){
    $lastPage = getLastPage();
    header("Location: ../views/pages/$lastPage?error=" . urlencode($errorMessage));
}

function getErrorMessage(){
    return (isset($_GET["error"])) ? $_GET["error"] : null;
}

function getAlertForError(){
    $errorMessage = getErrorMessage();
    return ($errorMessage != null) ? "onload=alert('$errorMessage')" : "";
}