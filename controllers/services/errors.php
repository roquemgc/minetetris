<?php

function getLastURL(){
    return $_SERVER['HTTP_REFERER'];
}

function getLastPage(){
    return explode("?",explode("pages/",getLastURL())[1])[0];
}

function returnErrorToLastPage($errorMessage){
    $lastPage = getLastPage();
    header("Location: ../../views/pages/$lastPage?error=" . urlencode($errorMessage));
}

function getErrorMessage(){
    return (isset($_GET["error"])) ? urldecode($_GET["error"]) : null;
}

function getAlertForError(){
    $errorMessage = str_replace("'","",getErrorMessage());
    return ($errorMessage != null) ? "onload=\"alert('$errorMessage')\"" : "";
}