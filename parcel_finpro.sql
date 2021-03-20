-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: parcel1
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  `userID` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productID_idx` (`productID`),
  KEY `userID_idx` (`userID`),
  KEY `fk_productID_idx` (`productID`),
  CONSTRAINT `fk_productID` FOREIGN KEY (`productID`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,5,2),(2,2,6,2),(3,2,7,2),(4,3,8,2);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  `quantity` int NOT NULL,
  `cartID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productID_cart_idx` (`productID`),
  KEY `fk_cartID_idx` (`cartID`),
  CONSTRAINT `fk_cartID` FOREIGN KEY (`cartID`) REFERENCES `cart` (`id`),
  CONSTRAINT `fk_productID_cart` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'chocolate'),(2,'syrup'),(3,'biscuit'),(4,'parcel');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  `imagePath` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productID_idx` (`productID`),
  CONSTRAINT `fk_imageproduct` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (1,1,'daadada'),(2,2,'dadadda'),(3,3,'eqeqeq'),(4,4,'qeqrqr'),(5,5,'rewrewr'),(6,6,'rewrer'),(7,7,'rwerwer'),(8,8,'rwerr'),(9,9,'rwerg'),(10,10,'fdsfsf'),(11,11,'fdsfsdf'),(12,12,'fsfsdf');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(45) NOT NULL,
  `categoryID` int NOT NULL,
  `isAvailable` int NOT NULL,
  `isParsel` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `categoryID_idx` (`categoryID`),
  CONSTRAINT `categoryID` FOREIGN KEY (`categoryID`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'SilverQueen',10000,'Coklat enak',1,10,0),(2,'Cadbury',15000,'Coklat lembut',1,12,0),(3,'KinderJoy',12000,'Coklat anak',1,20,0),(4,'Buenos',20000,'Coklat asik',1,18,0),(5,'Marjan',22000,'Syrup enak',2,20,0),(6,'ABC',25000,'Syrup mantap',2,22,0),(7,'Tropicana Slim',35000,'Syrup premium',2,15,0),(8,'Freiss',27000,'Syrup asik',2,28,0),(9,'Oreo',5000,'Biskuit hitam putih',3,30,0),(10,'Slai Olai',4000,'Biskuit enak',3,30,0),(11,'Biskuat',5000,'Biskuit penyemangat',3,20,0),(12,'Roma Kelapa',9000,'Biskuit keluarga',3,20,0),(13,'Parsel A',300000,'Parsel tipe A',4,22,1),(14,'Parcel B',500000,'PArsel tipe B',4,44,1),(15,'Parcel C',700000,'Parcel tipe V',4,33,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  `productID` int NOT NULL,
  `quantity` int NOT NULL,
  `total` int NOT NULL,
  `transaction_ItemID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userID_idx` (`userID`),
  KEY `transactionItemID_idx` (`transaction_ItemID`),
  CONSTRAINT `transactionItemID` FOREIGN KEY (`transaction_ItemID`) REFERENCES `transaction_item` (`id`),
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_detail`
--

DROP TABLE IF EXISTS `transaction_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  `quantity` int NOT NULL,
  `total` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productID_trans_idx` (`productID`),
  CONSTRAINT `productID_trans` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_detail`
--

LOCK TABLES `transaction_detail` WRITE;
/*!40000 ALTER TABLE `transaction_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_item`
--

DROP TABLE IF EXISTS `transaction_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  `quantity` int NOT NULL,
  `transaction_detailID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productID_idx` (`productID`),
  KEY `transaction_detail_idx` (`transaction_detailID`),
  CONSTRAINT `productID` FOREIGN KEY (`productID`) REFERENCES `products` (`id`),
  CONSTRAINT `transaction_detail` FOREIGN KEY (`transaction_detailID`) REFERENCES `transaction_detail` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_item`
--

LOCK TABLES `transaction_item` WRITE;
/*!40000 ALTER TABLE `transaction_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `roleID` int NOT NULL DEFAULT '2',
  `verified` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roleID_idx` (`roleID`),
  CONSTRAINT `roleID` FOREIGN KEY (`roleID`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'derick','derick@gmail.com','derick123',1,0),(2,'dicky','dicky@gmail.com','dicky123',1,0),(3,'filo','filo@gmail.com','filo123',1,0),(4,'kevin','kevin@gmail.com','kevin123',1,0),(5,'dicky456','dicky456@gmail.com','dicky456',2,0),(6,'filo456','filo456@gmail.com','filo456',2,0),(7,'derick456','derick456@gmail.com','derick456',2,0),(8,'kevin456','kevin456@gmail.com','kevin456',2,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verification_transaction`
--

DROP TABLE IF EXISTS `verification_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verification_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `transaction_itemID` int NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `transaction_itemID_idx` (`transaction_itemID`),
  CONSTRAINT `transaction_itemID` FOREIGN KEY (`transaction_itemID`) REFERENCES `transaction_item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification_transaction`
--

LOCK TABLES `verification_transaction` WRITE;
/*!40000 ALTER TABLE `verification_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `verification_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-19 22:08:21
