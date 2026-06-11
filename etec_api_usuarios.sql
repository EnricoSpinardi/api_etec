USE etec_api;
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `usuarios` VALUES (1,'André',18,'andre@gmail.com','Itu'),(2,'Maria',19,'maria@gmail.com','Sorocaba');

SELECT * FROM `usuarios`;

