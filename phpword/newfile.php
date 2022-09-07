<?
require 'vendor/autoload.php';
//$source = __DIR__."text.docx"; 

$objReader = \PhpOffice\PhpWord\IOFactory::createReader('Word2007');
 
$phpWord = $objReader->load('text.docx');
 
$body = '';
foreach($phpWord->getSections() as $section) {
 $arrays = $section->getElements();
var_dump($arrays);
}
 /*foreach($arrays as $e) {
 if(get_class($e) === 'PhpOffice\PhpWord\Element\TextRun') {
 foreach($e->getElements() as $text) {


 $body .= $text->getText();
 }
 }
 
 else if(get_class($e) === 'PhpOffice\PhpWord\Element\TextBreak') {
 $body .= '<br />';
 }
 
 else if(get_class($e) === 'PhpOffice\PhpWord\Element\Table') {
 $body .= '<table border="2px">';
 
 $rows = $e->getRows();
 
 foreach($rows as $row) {
 $body .= '<tr>';
 
 $cells = $row->getCells();
 foreach($cells as $cell) {
 $body .= '<td style="width:'.$cell->getWidth().'">';
 $celements = $cell->getElements();
 foreach($celements as $celem) {
 if(get_class($celem) === 'PhpOffice\PhpWord\Element\Text') {
 $body .= $celem->getText();
 }
 
 else if(get_class($celem) === 'PhpOffice\PhpWord\Element\TextRun') {
 foreach($celem->getElements() as $text) {
 $body .= $text->getText();
 }
 }
 } 
 $body .= '</td>';
 }
 
 $body .= '</tr>';
 }
 
 $body .= '</table>';
 }
 else {
 $body .= $e->getText();
 }
 }
 
 break;
}*/