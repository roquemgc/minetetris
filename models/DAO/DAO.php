<?php

abstract class DAO
{

    public static function isConnObj($conn)
    {
        return is_object($conn) && get_class($conn) == "PDO";
    }

    abstract public static function select($conn, $obj);

    abstract public static function insert($conn, $obj);

    abstract public static function update($conn, $obj);

    abstract public static function delete($conn, $obj);
}
