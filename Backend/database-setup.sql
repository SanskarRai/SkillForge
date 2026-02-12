-- SkillForge MySQL Database Setup Script
-- Run this in MySQL Workbench 8.0 CE

-- Create database
CREATE DATABASE IF NOT EXISTS skillforge 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Create user (optional - you can use root)
CREATE USER IF NOT EXISTS 'skillforge_user'@'localhost' IDENTIFIED BY 'skillforge123';

-- Grant privileges
GRANT ALL PRIVILEGES ON skillforge.* TO 'skillforge_user'@'localhost';
FLUSH PRIVILEGES;

-- Use the database
USE skillforge;

-- Show database info
SELECT 'SkillForge database created successfully!' as message;
SHOW TABLES;