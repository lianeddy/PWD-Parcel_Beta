-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: parcel_finpro
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'All'),(2,'chocolate'),(3,'syrup'),(4,'biscuit'),(5,'parcel');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `limit_package_category`
--

DROP TABLE IF EXISTS `limit_package_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `limit_package_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_productID` int NOT NULL,
  `categoryID` int NOT NULL,
  `limit` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categoryID_idx` (`categoryID`),
  KEY `fk_roleParcelID_idx` (`role_productID`),
  CONSTRAINT `fk_categoryID` FOREIGN KEY (`categoryID`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_roleParcelID` FOREIGN KEY (`role_productID`) REFERENCES `role_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `limit_package_category`
--

LOCK TABLES `limit_package_category` WRITE;
/*!40000 ALTER TABLE `limit_package_category` DISABLE KEYS */;
INSERT INTO `limit_package_category` VALUES (1,1,2,0),(2,1,3,0),(3,1,4,0),(4,2,2,0),(5,2,3,0),(6,2,4,0),(7,3,2,0),(8,3,3,0),(9,3,4,0);
/*!40000 ALTER TABLE `limit_package_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_package`
--

DROP TABLE IF EXISTS `product_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_package` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productID_idx` (`productID`),
  CONSTRAINT `fk_product_packageID` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_package`
--

LOCK TABLES `product_package` WRITE;
/*!40000 ALTER TABLE `product_package` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_package` ENABLE KEYS */;
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
  `stock` int NOT NULL,
  `isAvailable` int NOT NULL,
  `isParsel` tinyint NOT NULL DEFAULT '0',
  `imagePath` varchar(45) NOT NULL,
  `role_productID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryID_idx` (`categoryID`),
  KEY `fk_role_parcelID_idx` (`role_productID`),
  CONSTRAINT `categoryID` FOREIGN KEY (`categoryID`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_role_parcelID` FOREIGN KEY (`role_productID`) REFERENCES `role_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'SilverQueen',10000,'Coklat enak',2,20,1,0,'/products/SilverQueen.jpg',4),(2,'Cadbury',15000,'Coklat lembut',2,20,1,0,'/products/CadBury.jpg',4),(3,'KinderJoy',12000,'Coklat anak',2,20,1,0,'/products/KinderJoy.jpg',4),(4,'Buenos',20000,'Coklat asik',2,20,1,0,'/products/Buenos.jpg',4),(5,'Marjan',22000,'Syrup enak',3,20,1,0,'/products/Marjan.jpg',4),(6,'ABC',25000,'Syrup mantap',3,22,1,0,'/products/Abc Syrup.jpg',4),(7,'Tropicana Slim',35000,'Syrup premium',3,24,1,0,'/products/TropicanaSlim.jpg',4),(8,'Freiss',27000,'Syrup asik',3,26,1,0,'/products/Freiss.jpg',4),(9,'Oreo',5000,'Biskuit hitam putih',4,30,1,0,'/products/Oreo.jpg',4),(10,'Slai Olai',4000,'Biskuit enak',4,30,1,0,'/products/SlaiOlai.jpg',4),(11,'Biskuat',5000,'Biskuit penyemangat',4,20,1,0,'/products/Biskuat.jpg',4),(12,'Roma Kelapa',9000,'Biskuit keluarga',4,20,1,0,'/products/RomaKelapa.jpg',4),(13,'Parcel A',100000,'Parcel tipe A',5,22,1,1,'/products/ParcelBox.jpg',1),(14,'Parcel B',150000,'Parcel tipe B',5,44,1,1,'/products/ParcelBox.jpg',2),(15,'Parcel C',200000,'Parcel tipe C',5,33,1,1,'/products/ParcelBox.jpg',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_product`
--

DROP TABLE IF EXISTS `role_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_product`
--

LOCK TABLES `role_product` WRITE;
/*!40000 ALTER TABLE `role_product` DISABLE KEYS */;
INSERT INTO `role_product` VALUES (1,'Paket A'),(2,'Paket B'),(3,'Paket C'),(4,'Product');
/*!40000 ALTER TABLE `role_product` ENABLE KEYS */;
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
  `date` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `productID` int NOT NULL,
  `quantity` int NOT NULL,
  `transaction_statusID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userID_idx` (`userID`),
  KEY `transaction_statusID_idx` (`transaction_statusID`),
  CONSTRAINT `transaction_statusID` FOREIGN KEY (`transaction_statusID`) REFERENCES `transaction_status` (`id`),
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
-- Table structure for table `transaction_status`
--

DROP TABLE IF EXISTS `transaction_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_status`
--

LOCK TABLES `transaction_status` WRITE;
/*!40000 ALTER TABLE `transaction_status` DISABLE KEYS */;
INSERT INTO `transaction_status` VALUES (1,'Confirmation'),(2,'Process'),(3,'Delivery'),(4,'Delivered'),(5,'Success'),(6,'Failed');
/*!40000 ALTER TABLE `transaction_status` ENABLE KEYS */;
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

-- Dump completed on 2021-03-24 21:23:40
