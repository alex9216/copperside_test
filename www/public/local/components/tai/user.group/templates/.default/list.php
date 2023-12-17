<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}
var_dump($arParams);
$APPLICATION->IncludeComponent('tai:user.group.list', '.default', [
    'CACHE_TYPE' => $arParams['CACHE_TYPE'],
    'CACHE_TIME' => $arParams['CACHE_TIME'],
    'SECTION_TITLE' => $arParams['SECTION_TITLE']
], $component);
