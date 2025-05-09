-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: testdatabase
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `user_id` char(36) DEFAULT NULL,
  `account_number` varchar(50) NOT NULL,
  `balance` decimal(10,2) DEFAULT '0.00',
  `account_type` enum('savings','checking') DEFAULT NULL,
  `status` enum('active','inactive','suspended','under investigation','termination') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_number` (`account_number`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES ('acc-1111-aaaa-bbbb-cccc-1111','11111111-1111-1111-1111-111111111111','ACC123456789',5250.00,'checking','active','2025-04-25 23:20:07'),('acc-2222-aaaa-bbbb-cccc-2222','22222222-2222-2222-2222-222222222222','ACC987654321',7300.50,'savings','active','2025-04-25 23:20:07'),('acc-3333-aaaa-bbbb-cccc-3333','33333333-3333-3333-3333-333333333333','ACC555666777',12000.00,'checking','suspended','2025-04-25 23:20:07');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `budgets`
--

DROP TABLE IF EXISTS `budgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `budgets` (
  `id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `category` varchar(100) NOT NULL,
  `budget_amount` decimal(10,2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `budgets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budgets`
--

LOCK TABLES `budgets` WRITE;
/*!40000 ALTER TABLE `budgets` DISABLE KEYS */;
INSERT INTO `budgets` VALUES ('21c4616e-a449-4f27-8b70-d5a9e2ab1b73','b6158499-8e3d-4c5f-85dd-b7768ae4be74','Groceries',100.00,'2025-05-20','2025-05-24','2025-05-05 02:09:58','2025-05-05 02:09:58'),('a6b1e167-a6de-4647-bd27-32bb50468c72','b6158499-8e3d-4c5f-85dd-b7768ae4be74','Groceries',150.00,'2025-05-05','2025-05-10','2025-05-05 02:06:38','2025-05-05 02:06:38');
/*!40000 ALTER TABLE `budgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `account_id` char(36) DEFAULT NULL,
  `card_number` varchar(255) NOT NULL,
  `expiry_date` date NOT NULL,
  `card_type` enum('debit','credit') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `card_number` (`card_number`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES ('card-aaaa-bbbb-cccc-1111','acc-1111-aaaa-bbbb-cccc-1111','4111111111111111','2027-05-01','debit','2025-04-25 23:20:07'),('card-bbbb-cccc-dddd-2222','acc-2222-aaaa-bbbb-cccc-2222','5500000000000004','2028-09-01','credit','2025-04-25 23:20:07');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_card_info`
--

DROP TABLE IF EXISTS `credit_card_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credit_card_info` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `card_id` char(36) DEFAULT NULL,
  `credit_limit` decimal(10,2) NOT NULL,
  `current_balance` decimal(10,2) DEFAULT '0.00',
  `interest_rate` decimal(5,2) NOT NULL,
  `apr` decimal(5,2) NOT NULL,
  `minimum_payment` decimal(10,2) DEFAULT '0.00',
  `late_fee` decimal(10,2) DEFAULT '0.00',
  `billing_due_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `card_id` (`card_id`),
  CONSTRAINT `credit_card_info_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `cards` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_card_info`
--

LOCK TABLES `credit_card_info` WRITE;
/*!40000 ALTER TABLE `credit_card_info` DISABLE KEYS */;
INSERT INTO `credit_card_info` VALUES ('ccinfo-aaaa-bbbb-cccc-1111','card-bbbb-cccc-dddd-2222',10000.00,1200.00,15.99,19.99,50.00,25.00,'2025-05-15','2025-04-25 23:20:07');
/*!40000 ALTER TABLE `credit_card_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL,
  `seller` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `category` enum('Groceries','Entertainment','Bills','Other') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_history`
--

DROP TABLE IF EXISTS `login_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_history` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `email` varchar(255) NOT NULL,
  `login_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `login_source` enum('web','search engine','app','browser') NOT NULL,
  `user_id` char(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `login_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_history`
--

LOCK TABLES `login_history` WRITE;
/*!40000 ALTER TABLE `login_history` DISABLE KEYS */;
INSERT INTO `login_history` VALUES ('3fee71b0-254e-11f0-8284-50ebf6b8dbc5','greg@gmail.com','2025-04-29 23:04:05','web','b6158499-8e3d-4c5f-85dd-b7768ae4be74'),('965f216a-254b-11f0-8284-50ebf6b8dbc5','steven@gmail.com','2025-04-29 22:45:02','web','f30c54e7-db5b-4416-8d16-0c533b803a0c'),('d39bf03a-222b-11f0-a495-50ebf6b8dbc5','john@example.com','2025-04-25 23:20:07','web','11111111-1111-1111-1111-111111111111'),('d39bf6da-222b-11f0-a495-50ebf6b8dbc5','jane@example.com','2025-04-25 23:20:07','browser','22222222-2222-2222-2222-222222222222'),('d39bf85c-222b-11f0-a495-50ebf6b8dbc5','alice@example.com','2025-04-25 23:20:07','app','33333333-3333-3333-3333-333333333333'),('e31d8a1f-254c-11f0-8284-50ebf6b8dbc5','dan@gmail.com','2025-04-29 22:54:20','web','98a39610-80bc-4074-82e3-4aa282f0612f'),('hist-aaaa-bbbb-cccc-1111','john@example.com','2025-04-25 23:20:07','web','11111111-1111-1111-1111-111111111111'),('hist-bbbb-cccc-dddd-2222','jane@example.com','2025-04-25 23:20:07','browser','22222222-2222-2222-2222-222222222222');
/*!40000 ALTER TABLE `login_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logins`
--

DROP TABLE IF EXISTS `logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logins` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `login_source` enum('web','search engine','app','browser') NOT NULL,
  `user_id` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logins`
--

LOCK TABLES `logins` WRITE;
/*!40000 ALTER TABLE `logins` DISABLE KEYS */;
INSERT INTO `logins` VALUES ('50594a50-7914-4ddf-8450-ff475beb346c','steven@gmail.com','john steven','$2b$10$BNoC31hq5QNw5B0ofp6S2utZ6szee7PpTaqHkUI3XqmBkCIHTBjjG','web','f30c54e7-db5b-4416-8d16-0c533b803a0c','2025-04-29 22:45:02'),('5dd6df2f-2077-423d-bbb8-ea9740fbf4b1','greg@gmail.com','Greg','$2b$10$BwPN6M4L9akzDQgHsk8rE.jvIxFW0V.9bOm3XYSwRVM2FWeS.xvgq','web','b6158499-8e3d-4c5f-85dd-b7768ae4be74','2025-04-29 23:04:06'),('aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa','johnd@example.com','Johnny','password123','web','11111111-1111-1111-1111-111111111111','2025-04-25 23:20:07'),('aaaaaaa2-aaaa-aaaa-aaaa-aaaaaaaaaaaa','jane@example.com','Janey','securepass456','browser','22222222-2222-2222-2222-222222222222','2025-04-25 23:20:07'),('aaaaaaa3-aaaa-aaaa-aaaa-aaaaaaaaaaaa','alice@example.com','alicej','mypassword789','app','33333333-3333-3333-3333-333333333333','2025-04-25 23:20:07'),('b70cc61b-c629-48a5-9513-6f7f503c150a','dan@gmail.com','dan','$2b$10$lSaq4K3AX8KWGSWXqIfXrudhsMfjmAKGon0kVvoMwoKYspNSCKb0S','web','98a39610-80bc-4074-82e3-4aa282f0612f','2025-04-29 22:54:21');
/*!40000 ALTER TABLE `logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `account_id` char(36) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transaction_type` enum('deposit','withdrawal','transfer') DEFAULT NULL,
  `related_account` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  KEY `related_account` (`related_account`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`related_account`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES ('txn-aaaa-1111-bbbb-cccc-aaaa','acc-1111-aaaa-bbbb-cccc-1111',250.00,'deposit',NULL,'2025-04-25 23:20:07'),('txn-bbbb-2222-cccc-dddd-bbbb','acc-2222-aaaa-bbbb-cccc-2222',500.00,'withdrawal',NULL,'2025-04-25 23:20:07'),('txn-cccc-3333-dddd-eeee-cccc','acc-1111-aaaa-bbbb-cccc-1111',300.00,'transfer','acc-2222-aaaa-bbbb-cccc-2222','2025-04-25 23:20:07');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) NOT NULL DEFAULT (uuid()),
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('11111111-1111-1111-1111-111111111111','John Doe','john@example.com','2025-04-25 23:20:07'),('22222222-2222-2222-2222-222222222222','Jane Smith','jane@example.com','2025-04-25 23:20:07'),('33333333-3333-3333-3333-333333333333','Alice Johnson','alice@example.com','2025-04-25 23:20:07'),('6d8f75ca-24d9-4697-859d-357ac1cc083c','bob bob','bob@gmail.com','2025-04-29 22:35:07'),('98a39610-80bc-4074-82e3-4aa282f0612f','dan','dan@gmail.com','2025-04-29 22:54:21'),('b6158499-8e3d-4c5f-85dd-b7768ae4be74','greg','greg@gmail.com','2025-04-29 23:04:06'),('f30c54e7-db5b-4416-8d16-0c533b803a0c','john steven','steven@gmail.com','2025-04-29 22:45:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-09 17:49:14
