-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: sihdatabase
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `QueID` int NOT NULL,
  `statement` varchar(500) NOT NULL,
  `optionA` varchar(45) NOT NULL,
  `optionB` varchar(45) NOT NULL,
  `optionC` varchar(45) NOT NULL,
  `optionD` varchar(45) NOT NULL,
  `ans` varchar(45) NOT NULL,
  PRIMARY KEY (`QueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'What is the capital of Japan?','Tokyo','Kyoto','Osaka','Seoul','Tokyo'),(2,'Which gas do plants absorb from the atmosphere?','Oxygen','Carbon Dioxide','Nitrogen','Hydrogen','Carbon Dioxide'),(3,'What is the largest planet in our solar system?','Earth','Mars','Jupiter','Venus','Jupiter'),(4,'Which country is known as the Land of the Rising Sun?','China','Korea','Japan','Vietnam','Japan'),(5,'What is the chemical symbol for gold?','Go','Au','Ag','Ge','Au'),(6,'Which planet is closest to the Sun?','Mars','Jupiter','Venus','Mercury','Mercury'),(7,'What is the largest mammal in the world?','Lion','Elephant','Blue Whale','Giraffe','Blue Whale'),(9,'What is the largest organ in the human body?','Heart','Lungs','Skin','Brain','Skin'),(10,'Which planet is known as the Red Planet?','Earth','Jupiter','Mars','Venus','Mars'),(11,'What is the smallest prime number?','1','2','3','4','2'),(12,'Which gas do humans exhale when they breathe out?','Oxygen','Carbon Dioxide','Nitrogen','Hydrogen','Carbon Dioxide'),(13,'What is the largest continent in the world?','Africa','Europe','Asia','North America','Asia'),(14,'Which of the following is not a primary color?','Red','Blue','Green','Yellow','Yellow'),(15,'What is the chemical symbol for oxygen?','O','Ox','Om','Og','O'),(16,'Which planet is known as the Evening Star?','Mars','Jupiter','Venus','Mercury','Venus'),(17,'What is the freezing point of water in degrees Celsius?','0°C','100°C','25°C','-10°C','0°C'),(18,'Which gas is known as laughing gas?','Oxygen','Carbon Dioxide','Nitrous Oxide','Hydrogen','Nitrous Oxide'),(19,'How many continents are there on Earth?','3','5','6','7','7'),(20,'What is the chemical symbol for silver?','Si','Ag','Au','Sr','Ag'),(21,'What is the formula for the area of a rectangle?','A = πr²','A = bh','A = 2πr','A = s²','A = bh'),(23,'In which year did Christopher Columbus reach the Americas?','1492','1776','1865','1512','1492'),(24,'What is the process by which plants make their own food using sunlight?','Respiration','Photosynthesis','Fermentation','Transpiration','Photosynthesis'),(26,'What is the chemical formula for water?','CO₂','H₂O','O₂','CH₄','H₂O'),(27,'Which gas do humans primarily inhale when they breathe?','Oxygen','Carbon Dioxide','Nitrogen','Hydrogen','Oxygen'),(29,'What is the process by which rocks are broken down into smaller particles?','Weathering','Erosion','Sedimentation','Volcanism','Weathering');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-23 18:38:20
