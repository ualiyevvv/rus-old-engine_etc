<?php
    namespace views;

    use app\base\Page;
    use app\base\Response;

    class PageIndex extends Page {
        public function render() {
            $response = new Response();

            $response->setContent([
                "file" => true,
                "path" => __DIR__ . "/templates/indexPage.php"
            ])
                ->setContentType("html")
                ->setLayout('main');
                
            return $response->render();
        }
    }