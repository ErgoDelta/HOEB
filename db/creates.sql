USE hoeb;
DROP SCHEMA hoeb;
CREATE SCHEMA hoeb;
USE hoeb;

CREATE TABLE servers
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    last_heartbeat DATETIME NOT NULL,

    PRIMARY KEY (id),

    UNIQUE (address, name)
) ENGINE=InnoDB;
