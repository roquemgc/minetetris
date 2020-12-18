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

function returnSuccessToLastPage($successMessage){
    $lastPage = getLastPage();
    header("Location: ../../views/pages/$lastPage?success=" . urlencode($successMessage));
}

function returnSuccessToPage($successMessage,$page){
    header("Location: ../../views/pages/$page?success=" . urlencode($successMessage));
}

function getSuccessMessage(){
    return (isset($_GET["success"])) ? urldecode($_GET["success"]) : null;
}

function getAlertForMessage(){
    $message = str_replace("'","",getErrorMessage());
    if($message == null){
        $message = str_replace("'","",getSuccessMessage());
    }
    return ($message != null) ? "onload=\"alert('$message')\"" : "";
}