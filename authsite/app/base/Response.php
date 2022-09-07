<?php

namespace app\base;

class Response {
    public $content = "";
    public $contentType = "html";
    public $layout = "main"; 

    public function setContent($value) {
        if(is_array($value)) {
            if($value['file']) {
                ob_start();
                include $value['path'];
                $content = ob_get_contents();
                ob_get_clean();

                $this->content = $content;
            } else {
                $this->content = $value;
            }
        } else {
            $this->content = $value;
        }
       
        return $this;
    }

    public function setContentType($value) {
        $this->contentType = $value;
        return $this;
    }

    public function setLayout($value) {
        $this->layout = $value;
        return $this;
    }

    public function render() {
        $newContent = "";

        if($contentType == "html") {
            $newContent = $this->content;
        } else if($contentType == "json") {
            $newContent =  json_encode($this->content);
        }

        ob_start();

        extract([
            "content" => $newContent
        ]);
        include dirname(__DIR__) . "../../views/layouts/" . $this->layout . ".php";

        $content = ob_get_contents();
        ob_get_clean();

        return $content;
    }
}