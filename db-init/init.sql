CREATE DATABASE IF NOT EXISTS docp_db;
USE docp_db;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO items (name) VALUES
('Item 1'),
('Item 2'),
('Item 3');

