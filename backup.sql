-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: ResultSystem
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.10.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dname` varchar(70) NOT NULL,
  PRIMARY KEY (`dname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES ('Aerospace Engineering'),('Computer Science Engineering'),('MCA');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `excel`
--

DROP TABLE IF EXISTS `excel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `excel` (
  `city` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excel`
--

LOCK TABLES `excel` WRITE;
/*!40000 ALTER TABLE `excel` DISABLE KEYS */;
INSERT INTO `excel` VALUES ('muzaffarpur','support@megamock.com','123456789'),('patna','support@megamock.com','7182931564'),('bihar','support@megamock.com','65498346465'),('kolkata','support@megamock.com','88976543213'),('muzaffarpur','support@megamock.com','123456789'),('patna','support@megamock.com','7182931564'),('bihar','support@megamock.com','65498346465'),('kolkata','support@megamock.com','88976543213'),('hjnm','bhn','65433456'),('hjnm','bhn','65433456');
/*!40000 ALTER TABLE `excel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `sino` int NOT NULL AUTO_INCREMENT,
  `dname` varchar(100) NOT NULL,
  `usn` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `semester_no` varchar(20) NOT NULL,
  `year` varchar(20) NOT NULL,
  `sub1` varchar(30) DEFAULT NULL,
  `sub2` varchar(30) DEFAULT NULL,
  `sub3` varchar(30) DEFAULT NULL,
  `sub4` varchar(30) DEFAULT NULL,
  `sub5` varchar(30) DEFAULT NULL,
  `sub6` varchar(30) DEFAULT NULL,
  `sub7` varchar(30) DEFAULT NULL,
  `sub8` varchar(30) DEFAULT NULL,
  `sub9` varchar(30) DEFAULT NULL,
  `sub10` varchar(30) DEFAULT NULL,
  `sgpa` varchar(30) NOT NULL,
  PRIMARY KEY (`sino`)
) ENGINE=InnoDB AUTO_INCREMENT=2312 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (2236,'MCA','1RV20MC042','MALLIKARJUN','2','2023','NULL','NULL','NULL','NULL','NULL','B',NULL,NULL,NULL,NULL,'6.54'),(2237,'MCA','1RV20MC106','VAMSHIKRISHNA B T','2','2023','NULL','NULL','D','NULL','C','NULL',NULL,NULL,NULL,NULL,'6.5'),(2238,'MCA','1RV21MC023','BHARAT RANJAN','2','2023','NULL','NULL','NULL','NULL','NULL','B',NULL,NULL,NULL,NULL,'7'),(2239,'MCA','1RV21MC030','CHIRANJIT DAS','2','2023','D','NULL','D','NULL','NULL','NULL',NULL,NULL,NULL,NULL,'5.08'),(2240,'MCA','1RV21MC037','GATTANI TANUJ SUBHASH','2','2023','NULL','NULL','NULL','C','NULL','NULL',NULL,NULL,NULL,NULL,'6.88'),(2241,'MCA','1RV21MC074','PRAKASH R S','2','2023','C','NULL','B','NULL','NULL','NULL',NULL,NULL,NULL,NULL,'1.04'),(2242,'MCA','1RV21MC091','SANJIV KUMAR','2','2023','NULL','C','NULL','NULL','NULL','NULL',NULL,NULL,NULL,NULL,'6.54'),(2243,'MCA','1RV21MC105','SUDIRY ASATTA MUNDAL','2','2023','NULL','NULL','NULL','NULL','NULL','C',NULL,NULL,NULL,NULL,'5.54'),(2244,'Branch','USN','Name','Semester','Year','20MCA21','20MCA22','20MCA23','20MCA24X','20MCA25X','20MCA26X',NULL,NULL,NULL,NULL,'SGPA'),(2245,'Aerospace Engineering','1RV15AS022','GREESHMA S ','7','2016','E','D','A','B','B','B','A',NULL,NULL,NULL,'7.5'),(2246,'Aerospace Engineering','1RV15AS026','KAUSHAL N ','7','2016','F','F','E','D','C','C','C',NULL,NULL,NULL,'4.71'),(2247,'Aerospace Engineering','1RV15AS038','PRADYUMNA M S ','7','2016','F','Ab','B','D','B','C','C',NULL,NULL,NULL,'5.38'),(2248,'Aerospace Engineering','1RV16AS001','ABHILASH BAROOR','7','2016','E','D','A','C','B','B','D',NULL,NULL,NULL,'6.96'),(2249,'Aerospace Engineering','1RV16AS002','ABHINAV MAHESH','7','2016','D','D','A','A','A','A','A',NULL,NULL,NULL,'8.25'),(2250,'Aerospace Engineering','1RV16AS003','ADARSH AGRAWAL','7','2016','C','C','A','A','A','A','A',NULL,NULL,NULL,'8.5'),(2251,'Aerospace Engineering','1RV16AS004','ADITYA VEDANTHU','7','2016','D','C','A','B','B','B','D',NULL,NULL,NULL,'7.5'),(2252,'Aerospace Engineering','1RV16AS006','ANAGHA G RAO','7','2016','C','B','A','A','A','A','A',NULL,NULL,NULL,'8.63'),(2253,'Aerospace Engineering','1RV16AS007','ANAGHA S GOWDA','7','2016','C','B','A','A','A','S','B',NULL,NULL,NULL,'8.67'),(2254,'Aerospace Engineering','1RV16AS009','ARPITHA L RATHOD','7','2016','C','B','A','A','B','A','B',NULL,NULL,NULL,'8.33'),(2255,'Aerospace Engineering','1RV16AS012','CHIDANANDA M','7','2016','D','D','B','C','C','A','C',NULL,NULL,NULL,'7.21'),(2256,'Aerospace Engineering','1RV16AS013','DEVIKA R','7','2016','C','B','A','A','A','S','A',NULL,NULL,NULL,'8.79'),(2257,'Aerospace Engineering','1RV16AS014','DURBHA MAITRA VARUN','7','2016','D','D','A','C','C','B','C',NULL,NULL,NULL,'7.17'),(2258,'Aerospace Engineering','1RV16AS015','GUNJAN JAVARIA','7','2016','C','B','A','B','B','A','A',NULL,NULL,NULL,'8.29'),(2259,'Aerospace Engineering','1RV16AS016','HARI KRISHNA RAJU T S','7','2016','F','D','B','C','C','A','B',NULL,NULL,NULL,'6.58'),(2260,'Aerospace Engineering','1RV16AS017','HARSHAVARDHANA M','7','2016','D','B','A','B','B','A','B',NULL,NULL,NULL,'8.04'),(2261,'Aerospace Engineering','1RV16AS018','HRITHIK ANAND HARDI','7','2016','D','D','A','B','B','B','C',NULL,NULL,NULL,'7.5'),(2262,'Aerospace Engineering','1RV16AS019','JAGADEESH S','7','2016','E','D','B','C','B','B','B',NULL,NULL,NULL,'7.08'),(2263,'Aerospace Engineering','1RV16AS021','JAYANTH G P','7','2016','D','C','C','B','A','A','B',NULL,NULL,NULL,'7.83'),(2264,'Aerospace Engineering','1RV16AS022','JAYARAJ NARAYAN MOGER','7','2016','B','C','C','A','A','A','B',NULL,NULL,NULL,'8.25'),(2265,'Aerospace Engineering','1RV16AS023','K B BHEEMANA GOWDA','7','2016','D','C','B','A','A','S','B',NULL,NULL,NULL,'8.29'),(2266,'Aerospace Engineering','1RV16AS024','KARTHIK B V','7','2016','C','C','A','B','C','A','C',NULL,NULL,NULL,'7.75'),(2267,'Aerospace Engineering','1RV16AS025','KARTHIK M','7','2016','B','B','A','S','A','A','A',NULL,NULL,NULL,'8.92'),(2268,'Aerospace Engineering','1RV16AS026','KAUSTAV KISHOR','7','2016','D','C','A','B','B','A','C',NULL,NULL,NULL,'7.79'),(2269,'Aerospace Engineering','1RV16AS027','LIPIKA M','7','2016','E','D','B','C','C','B','C',NULL,NULL,NULL,'6.79'),(2270,'Aerospace Engineering','1RV16AS030','NAINA BIRADAR','7','2016','D','D','A','B','A','S','A',NULL,NULL,NULL,'8.25'),(2271,'Aerospace Engineering','1RV16AS031','NAYANA H GOWDA','7','2016','F','E','A','B','B','B','B',NULL,NULL,NULL,'6.63'),(2272,'Aerospace Engineering','1RV16AS032','POOJA S','7','2016','D','C','A','A','S','A','B',NULL,NULL,NULL,'8.42'),(2273,'Aerospace Engineering','1RV16AS033','PRADYUMNA BHANDIWAD','7','2016','C','C','A','S','S','S','S',NULL,NULL,NULL,'9.13'),(2274,'Aerospace Engineering','1RV16AS034','PRATISHTHA RAWAT','7','2016','E','D','A','C','C','A','A',NULL,NULL,NULL,'7.33'),(2275,'Aerospace Engineering','1RV16AS036','RACHNA DANDWANI','7','2016','C','C','A','B','B','B','B',NULL,NULL,NULL,'7.88'),(2276,'Aerospace Engineering','1RV16AS037','RAHUL P','7','2016','D','C','A','C','B','B','C',NULL,NULL,NULL,'7.46'),(2277,'Aerospace Engineering','1RV16AS038','RAKSHITH VISHWANATH','7','2016','F','E','A','C','D','C','C',NULL,NULL,NULL,'5.83'),(2278,'Aerospace Engineering','1RV16AS041','RYAN XAVIER DSOUZA','7','2016','C','B','A','A','A','A','A',NULL,NULL,NULL,'8.63'),(2279,'Aerospace Engineering','1RV16AS042','SAGAR','7','2016','C','B','B','A','A','A','C',NULL,NULL,NULL,'8.25'),(2280,'Aerospace Engineering','1RV16AS043','SAKSHA','7','2016','D','B','A','B','S','B','A',NULL,NULL,NULL,'8.33'),(2281,'Aerospace Engineering','1RV16AS044','SAKSHI BALIYAN','7','2016','E','D','A','A','A','B','B',NULL,NULL,NULL,'7.71'),(2282,'Aerospace Engineering','1RV16AS045','SAMARTH G S','7','2016','E','D','A','B','C','A','B',NULL,NULL,NULL,'7.38'),(2283,'Aerospace Engineering','1RV16AS046','SAMEEKSHA SATYAJIT GIRIDHAR RAO','7','2016','B','A','A','S','A','A','A',NULL,NULL,NULL,'9.04'),(2284,'Aerospace Engineering','1RV16AS047','SANJUKTA MANDAL','7','2016','D','B','A','A','A','S','S',NULL,NULL,NULL,'8.79'),(2285,'Aerospace Engineering','1RV16AS048','SATHYANARAYANAN S','7','2016','E','E','A','C','A','A','B',NULL,NULL,NULL,'7.29'),(2286,'Aerospace Engineering','1RV16AS049','SHIBA SHIVAPRAKASH','7','2016','F','F','A','C','C','C','C',NULL,NULL,NULL,'5.5'),(2287,'Aerospace Engineering','1RV16AS050','SHREESHA M','7','2016','B','B','A','A','S','S','S',NULL,NULL,NULL,'9.21'),(2288,'Aerospace Engineering','1RV16AS051','SHREYAS G S','7','2016','D','D','A','B','C','B','C',NULL,NULL,NULL,'7.33'),(2289,'Aerospace Engineering','1RV16AS052','SHREYAS J SUVARNA','7','2016','C','B','A','A','A','A','A',NULL,NULL,NULL,'8.63'),(2290,'Aerospace Engineering','1RV16AS053','SHRISHARSHA PATIL','7','2016','F','F','A','D','C','B','D',NULL,NULL,NULL,'5.38'),(2291,'Aerospace Engineering','1RV16AS055','SINDHUJA','7','2016','D','D','A','C','B','B','B',NULL,NULL,NULL,'7.46'),(2292,'Aerospace Engineering','1RV16AS057','SUMANTH R M','7','2016','E','C','A','B','B','A','B',NULL,NULL,NULL,'7.67'),(2293,'Aerospace Engineering','1RV16AS059','TANVEER AHMED','7','2016','F','B','A','A','B','S','A',NULL,NULL,NULL,'7.75'),(2294,'Aerospace Engineering','1RV16AS060','THAMIM ANSARI H','7','2016','C','B','A','A','A','S','A',NULL,NULL,NULL,'8.79'),(2295,'Aerospace Engineering','1RV16AS061','VAIBHAV MAHAWAR','7','2016','C','C','A','B','A','A','B',NULL,NULL,NULL,'8.21'),(2296,'Aerospace Engineering','1RV16AS062','WAFA ANSARI','7','2016','D','D','A','B','B','B','C',NULL,NULL,NULL,'7.5'),(2297,'Aerospace Engineering','1RV16AS063','YASHASWINI K','7','2016','D','D','A','B','A','A','A',NULL,NULL,NULL,'8.08'),(2298,'Aerospace Engineering','1RV16AS064','AVINASH M','7','2016','E','D','B','B','A','A','A',NULL,NULL,NULL,'7.71'),(2299,'Aerospace Engineering','1RV16AS065','SHREYAS CHADAGA SATHYANARAYANA','7','2016','D','D','A','A','A','A','A',NULL,NULL,NULL,'8.25'),(2300,'Aerospace Engineering','1RV16AS403','HEMANTHAKUMAR N','7','2016','NSSR','F','D','B','C','NSSR',NULL,NULL,NULL,NULL,'3.5'),(2301,'Aerospace Engineering','1RV16AS405','KIRAN M','7','2016','NSSR','F','A','D','B','D','C',NULL,NULL,NULL,'5.33'),(2302,'Aerospace Engineering','1RV16AS409','SOUNDAR RAO G','7','2016','F','F','C','B','B','B','B',NULL,NULL,NULL,'5.88'),(2303,'Aerospace Engineering','1RV17AS400','ABHISHEK M','7','2016','E','F','A','A','A','A','B',NULL,NULL,NULL,'7.13'),(2304,'Aerospace Engineering','1RV17AS401','AMRUTHA A S','7','2016','E','D','A','B','A','A','C',NULL,NULL,NULL,'7.58'),(2305,'Aerospace Engineering','1RV17AS402','CHARITH GOWDA R','7','2016','E','E','A','B','B','C','B',NULL,NULL,NULL,'6.96'),(2306,'Aerospace Engineering','1RV17AS405','PREETHI H','7','2016','F','D','A','B','B','A','B',NULL,NULL,NULL,'7.04'),(2307,'Aerospace Engineering','1RV17AS406','ROHITH PAWAR C','7','2016','D','C','A','B','A','S','A',NULL,NULL,NULL,'8.38'),(2308,'Aerospace Engineering','1RV17AS407','SHASHANK C','7','2016','E','D','A','B','B','B','B',NULL,NULL,NULL,'7.38'),(2309,'Aerospace Engineering','1RV17AS409','SUMANTH S','7','2016','E','D','A','B','B','B','B',NULL,NULL,NULL,'7.38'),(2310,'Aerospace Engineering','1RV17AS410','TAUQEER AHMED','7','2016','E','D','A','B','B','A','A',NULL,NULL,NULL,'7.67'),(2311,'Branch','USN','Name','Semester','Year','16AS72','16AS73','17AS73P','16AS75','17AS7FX','17AS7GX','17G7HXX',NULL,NULL,NULL,'SGPA');
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `results` (
  `sino` int NOT NULL AUTO_INCREMENT,
  `dname` varchar(255) DEFAULT NULL,
  `usn` varchar(50) DEFAULT NULL,
  `sname` varchar(100) DEFAULT NULL,
  `semester_no` int DEFAULT NULL,
  `result_year` year DEFAULT NULL,
  `s1` varchar(50) DEFAULT NULL,
  `s2` varchar(50) DEFAULT NULL,
  `s3` varchar(50) DEFAULT NULL,
  `s4` varchar(50) DEFAULT NULL,
  `s5` varchar(50) DEFAULT NULL,
  `s6` varchar(50) DEFAULT NULL,
  `s7` varchar(50) DEFAULT NULL,
  `s8` varchar(50) DEFAULT NULL,
  `s9` varchar(50) DEFAULT NULL,
  `s10` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sino`),
  KEY `dname` (`dname`),
  CONSTRAINT `results_ibfk_1` FOREIGN KEY (`dname`) REFERENCES `department` (`dname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (1,'Computer Science Engineering','1RV12BT015','Chandana M',1,2018,'B','B','C','A','NSSR','A','A',NULL,NULL,NULL),(2,'Computer Science Engineering','1RV21MC029','Bandoo',1,2020,'D','A','B','C','D','E','NSSR',NULL,NULL,NULL);
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `usn` varchar(10) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `dname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `usn` (`usn`),
  KEY `dname` (`dname`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dname`) REFERENCES `department` (`dname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('1RV21MC029','Chandana M','chandanam.mca21@rvce.edu.in','$2b$10$gcKxou.1mvZZgUtjZuuOlupqt0FpwbzmDMX0jiCfxp3pXSV2eovx2','MCA'),('1RV22MC098','jhbn','chandanamnn.mca21@rvce.edu.in','$2b$10$gJGJ8dJbcvzSCb8WBRg8EOJ.9gVDJwGr6cEWFja5hslXOGfQa24/.','Computer Science Engineering'),('1RV21MC020','Chandana M','chandanamtyg.mca21@rvce.edu.in','$2b$10$q.tsNrZYTmXwWicz0juHEOel.KS4tPTeGoouO.6V4IFVP1quXatou','MCA'),('1RV21MC030','Chiranjit Das','chiranjitdas.mca21@rvce.edu.in','$2b$10$5Y3gKvXPCal.zv/WFDBY1.7Kqqz1HO4UNsXUkz0Hkeme1IEvCHNYO','MCA'),('1RV15AS038','PRADYUMNA M S ','pradu@rvce.edu.in','$2b$10$m/XxzxEM1pSk8vi7dfkibuqF8ByBVVRcjVC3OJ07FWi3Yul/wV7i2','Aerospace Engineering'),('1RV17AS409','Sumanth S','sumanths.mca14@rvce.edu.in','$2b$10$shemHQYWynzo02rI/mjwu.0Na.sW5X3NTAe0C23wRf9ykiWXhMC6C','Aerospace Engineering');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `subject_name` varchar(100) DEFAULT NULL,
  `subject_code` varchar(100) NOT NULL,
  `year` int NOT NULL,
  `semester_no` int NOT NULL,
  `dname` varchar(70) NOT NULL,
  `credits` int DEFAULT NULL,
  PRIMARY KEY (`subject_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('Kannada','16AS72',2016,7,'Aerospace Engineering',5),('English','16AS73',2016,7,'Aerospace Engineering',4),('Data Structures','16AS75',2016,7,'Aerospace Engineering',3),('DBMS','17AS73P',2016,7,'Aerospace Engineering',3),('Java','17AS7FX',2016,7,'Aerospace Engineering',3),('CPP','17AS7GX',2016,7,'Aerospace Engineering',2),('Elective-I','17G7HXX',2016,7,'Aerospace Engineering',1),('CPP','1RVCPP22',2016,2,'Computer Science Engineering',5),('SOFTWARE ENGINEERING','20MCA21',2020,2,'MCA',5),('DATA STRUCTURE & ALGORITHMS','20MCA22',2020,2,'MCA',2),('DATABASE MANAGEMENT SYSTEM','20MCA23',2020,2,'MCA',1),('Elective-I','20MCA24X',2020,2,'MCA',2),('Elective-II','20MCA25X',2020,2,'MCA',4),('Elective-III','20MCA26X',2020,2,'MCA',3),('Data science','22MCA21T',2020,3,'MCA',5),('IOT','22MCA22T',2020,3,'MCA',3),('Cloud Native','22MCA23T',2020,3,'MCA',2),('Java','22MCA24TL',2020,3,'MCA',2),('Elective-1','22MCA25XTL',2020,3,'MCA',3),('Elective-2','22MCA26XT',2020,3,'MCA',4),('JAVA','2RVJAVA12',2017,2,'Computer Science Engineering',2);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `email` varchar(50) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('rvce@edu.in','$2b$10$62Ih6qy9HRiYLZAHTj8pM..IScCxeOQpmXuHxa4YcnU8vwUWIEhWK'),('rvceadmin@rvce.edu.in','$2b$10$8dGvXQN6dvRvFF9t9EzAMerfCuD14.lqat2jAZnsrHWDrOValb2T.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-20 21:11:24
