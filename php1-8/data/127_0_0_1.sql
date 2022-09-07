-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 12 2018 г., 20:04
-- Версия сервера: 5.6.37
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `GU`
--
DROP DATABASE IF EXISTS `GU`;
CREATE DATABASE IF NOT EXISTS `GU` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `GU`;

-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE `basket` (
  `id` int(11) NOT NULL,
  `ID_UUID` varchar(255) NOT NULL,
  `count` int(11) NOT NULL,
  `prim` text NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id`, `ID_UUID`, `count`, `prim`, `id_user`) VALUES
(11, '95be16b0-c337-11e7-84ca-00ffc5973b64', 44, '', 1),
(12, '95be1b8d-c337-11e7-84ca-00ffc5973b68', 11, '', 1),
(13, '95be1a5e-c337-11e7-84ca-00ffc5973b67', 4, '', 1),
(14, '95be1414-c337-11e7-84ca-00ffc5973b63', 32, '', 1),
(15, '95be192f-c337-11e7-84ca-00ffc5973b66', 55, '', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `status` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `foto_category` varchar(500) NOT NULL,
  `description_category` varchar(1000) NOT NULL,
  `UUID_categiry` varchar(250) NOT NULL,
  `url_category` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id_category`, `status`, `name`, `parent_id`, `foto_category`, `description_category`, `UUID_categiry`, `url_category`) VALUES
(1, '1', 'ТОВАРЫ ДЛЯ СЕРФИНГА', 0, '', '', '', 'serf'),
(2, '1', 'ТОВАРЫ ДЛЯ ДАЙВИНГА', 0, '', '', '', 'diving'),
(7, '1', 'Гидрокостюмы', 1, 'images/serf/gidro.png', '', '', 'gidro'),
(8, '1', 'Доски', 1, 'images/serf/doska.png', '', '', 'doska_serf'),
(9, '1', 'Аксессуары', 1, 'images/serf/aksessuar.png', '', '', 'acsessuar'),
(10, '1', 'Кайтсерфы', 1, 'images/serf/jacknife_boards.png', '', '', 'kitesurfers'),
(11, '1', 'Чехлы', 1, 'images/serf/salmon pink.png', '', '', 'case'),
(12, '1', 'Маски', 2, 'images/diving/mask.png', '', '', 'mask'),
(13, '1', 'BCD куртки', 2, 'images/diving/seacsub-ego.png', '', '', 'seacsub-ego'),
(14, '1', 'Компьтеры', 2, 'images/diving/cressi-giotto.png', '', '', 'cressi_giotto'),
(15, '1', 'Подводные аппараты', 2, 'images/diving/seadoo-aquaranger.png', '', '', 'seadoo-aquaranger');

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE `goods` (
  `id_good` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `foto` varchar(250) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `view` int(4) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `short_description` text NOT NULL,
  `ID_UUID` varchar(250) NOT NULL DEFAULT 'SELECT UUID()'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id_good`, `name`, `price`, `id_category`, `status`, `foto`, `date`, `view`, `description`, `short_description`, `ID_UUID`) VALUES
(1, 'Good 1', 100, 7, 1, 'images/Livello29.png', '2017-11-01 18:57:45', 85, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.\r\n            <br><br>\r\n            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.\r\n            <br>\r\n            - 6.1 oz. 100% preshrunk heavyweight cotton<br>\r\n            - Shoulder-to-shoulder taping<br>\r\n            - Double-needle sleeves and bottom hem\r\n            <br><br>\r\n            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Краткое описание', '95be1414-c337-11e7-84ca-00ffc5973b63'),
(2, 'Good 2', 120, 7, 1, 'images/Livello29.png', '2017-11-02 18:57:45', 262, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.\r\n            <br><br>\r\n            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.\r\n            <br>\r\n            - 6.1 oz. 100% preshrunk heavyweight cotton<br>\r\n            - Shoulder-to-shoulder taping<br>\r\n            - Double-needle sleeves and bottom hem\r\n            <br><br>\r\n            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'краткое описние', '95be16b0-c337-11e7-84ca-00ffc5973b64'),
(3, 'Good 3', 48, 7, 2, 'images/Livello25.png', '2017-07-04 18:57:45', 13, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br><br>             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br>             - 6.1 oz. 100% preshrunk heavyweight cotton<br>             - Shoulder-to-shoulder taping<br>             - Double-needle sleeves and bottom hem             <br><br>             It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be17f4-c337-11e7-84ca-00ffc5973b65'),
(4, 'Good 4', 100500, 8, 2, 'images/Livello26.png', '2017-10-10 18:57:45', 244, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. \r\n\r\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. \r\n- 6.1 oz. 100% preshrunk heavyweight cotton\r\n- Shoulder-to-shoulder taping\r\n- Double-needle sleeves and bottom hem \r\n\r\nIt uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be192f-c337-11e7-84ca-00ffc5973b66'),
(5, 'Good 5', 2001, 8, 4, 'images/Livello27.png', '2017-11-02 18:57:45', 257, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br><br>             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br>             - 6.1 oz. 100% preshrunk heavyweight cotton<br>             - Shoulder-to-shoulder taping<br>             - Double-needle sleeves and bottom hem             <br><br>             It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be1a5e-c337-11e7-84ca-00ffc5973b67'),
(6, 'Good 6', 1020, 9, 2, 'images/Livello28.png', '2017-11-01 18:57:45', 36, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br><br>             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br>             - 6.1 oz. 100% preshrunk heavyweight cotton<br>             - Shoulder-to-shoulder taping<br>             - Double-needle sleeves and bottom hem             <br><br>             It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be1b8d-c337-11e7-84ca-00ffc5973b68'),
(7, 'Good 7', 1, 12, 2, 'images/shop.png', '2017-11-02 18:57:45', 19, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br><br>             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br>             - 6.1 oz. 100% preshrunk heavyweight cotton<br>             - Shoulder-to-shoulder taping<br>             - Double-needle sleeves and bottom hem             <br><br>             It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be1cbc-c337-11e7-84ca-00ffc5973b69'),
(8, 'Good 8', 800, 12, 1, 'images/shop.png', '2017-11-02 18:57:45', 13, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br><br>             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.             <br>             - 6.1 oz. 100% preshrunk heavyweight cotton<br>             - Shoulder-to-shoulder taping<br>             - Double-needle sleeves and bottom hem             <br><br>             It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.', '95be1deb-c337-11e7-84ca-00ffc5973b61');

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `name`) VALUES
(1, 'Главная'),
(2, 'О Магазине'),
(3, 'Каталог');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id_user` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pass` varchar(500) NOT NULL,
  `prim` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id_user`, `login`, `pass`, `prim`) VALUES
(1, 'user', '$2y$10$mBPas3uNzVeY0AYq4MWu7es7BfLAmI6j4r8fjmkaNRGeupNax69ZO', '');

-- --------------------------------------------------------

--
-- Структура таблицы `users_auth`
--

CREATE TABLE `users_auth` (
  `id_user` int(11) NOT NULL,
  `id_user_session` int(11) NOT NULL,
  `hash_cookie` varchar(500) NOT NULL,
  `date` date NOT NULL,
  `prim` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_auth`
--

INSERT INTO `users_auth` (`id_user`, `id_user_session`, `hash_cookie`, `date`, `prim`) VALUES
(1, 80, '1518033438.7963890052334915', '2018-02-07', '123456789'),
(1, 82, '1518033655.5734239841572188', '2018-02-07', '123456789'),
(1, 84, '1518033778.21538437078807', '2018-02-07', '123456789'),
(1, 85, '1518104826.4888471456274811', '2018-02-08', '123456789'),
(1, 87, '1518136957.4055790502863747', '2018-02-09', '123456789'),
(1, 90, '1518137661.147817229317070', '2018-02-09', '123456789'),
(1, 100, '1518138565.6392901740544435', '2018-02-09', '123456789'),
(1, 102, '1518138689.02128030639188218', '2018-02-09', '123456789'),
(1, 104, '1518138748.45822515157915015', '2018-02-09', '123456789'),
(1, 126, '1518140119.97322286479120884', '2018-02-09', '123456789'),
(1, 127, '1518140937.16528640929064410', '2018-02-09', '123456789'),
(1, 128, '1518141083.49728072785351969', '2018-02-09', '123456789');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Индексы таблицы `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id_good`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id_user`);

--
-- Индексы таблицы `users_auth`
--
ALTER TABLE `users_auth`
  ADD PRIMARY KEY (`id_user_session`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `basket`
--
ALTER TABLE `basket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблицы `goods`
--
ALTER TABLE `goods`
  MODIFY `id_good` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `users_auth`
--
ALTER TABLE `users_auth`
  MODIFY `id_user_session` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id_user`);

--
-- Ограничения внешнего ключа таблицы `users_auth`
--
ALTER TABLE `users_auth`
  ADD CONSTRAINT `users_auth_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
