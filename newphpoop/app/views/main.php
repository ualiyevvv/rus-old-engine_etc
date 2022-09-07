<?php 

    require_once "templates/header.php"; 
    require "../Db.php";
    require "../Posts.php";
    use app\Db;
    use app\Posts;

    $config = require_once "../../config.php";


    $posts = new Posts($config);
    $arr = $posts->getPosts();   

?>
<div class="container">

    <div class="row col-6">
        <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">descr_min</th>
                <th scope="col">image</th>
                <th scope="col">tools</th>
                <th scope="col">views</th>
            </tr>
        </thead>
        <tbody>
        <? foreach ($arr as $key => $value) { 
            $key++;
            $image = $value['image'];
            if (!isset($image) || trim($image)=='') {
                $image = 'default.jpg';
            }
            
            if (is_null($value['views'])) {
                $value['views'] = 0;
            }
            ?>
            <tr>
                <th><?=$key?></th>
                <th><?=$value['id']?></th>
                <td><?=$value['title']?></td>
                <td><?=$value['descr_min']?>...<a href="article.php?id=<?=$value['id']?>">Read more</a></td>
                <td><img width="70" src="images/<?=$image?>" alt="<?=$image?>"></td>
                <td><a href="delete.php?id=<?=$value['id']?>">del</a> | <a href="update.php?id=<?=$value['id']?>">update</a></td>
                <td><?=$value['views']?></td>
            </tr>
            <?  } ?>
        </tbody>
        </table>
        <!--
        <div class="row col-12 d-flex align-items-center">
            <b>Pages:</b>
            <?php
                for ($i = 0; $i <= $countPage; $i++){
                    echo '<a style="padding:5px;" href="index.php?page='.$i.'">'.$i.'</a>';
                }
            ?>
        </div>
    </div>
    <div class="row col-12 d-flex align-items-center"><b>Tags:</b>
        <?php
            for ($i = 0; $i <= count($tags); $i++){
                echo '<a style="padding:5px;" href="tags.php?tag='.$tags[$i]['tag'].'">'.$tags[$i]['tag'].'</a>';
            }
        ?>
    </div>
    <div class="row col-12 d-flex align-items-center"><b>Categories:</b>
        <?php
            for ($i = 0; $i <= count($categories); $i++){
                echo '<a style="padding:5px;" href="category.php?category='.$categories[$i]['id'].'">'.$categories[$i]['category'].'</a>';
            }
        ?>
    </div>-->
</div>

<?php require_once "templates/footer.php"; ?>