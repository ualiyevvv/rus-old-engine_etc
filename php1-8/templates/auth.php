<?php if (!$isAuth): ?>
<form action="/" method="post">
<label for="login">Логин</label><input type="text" id="login" name="login"><br>
<label for="pass">Пароль</label><input type="password" id="pass" name="pass"><br>
<label for="rememberme">Запомнить: </label><input type="checkbox" name="rememberme" id="rememberme" />
<input type="submit" name="SubmitLogin" value="Войти" /> <a href="/register/">Зарегистрироваться</a>
</form>
<?php endif; ?>


<br>

<?php if ($isAuth): ?>
<form action="" method="post">
<p>Вы авторизованы под логином <?=$isAuth['login'] ?></p>
<input type="submit" name="ExitLogin" value="Выйти" />
</form>
<?php endif; ?>

