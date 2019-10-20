CREATE TABLE "user"
(
  id SERIAL NOT NULL
    CONSTRAINT user_pkey
    PRIMARY KEY,
  email VARCHAR(255) NOT NULL
    CONSTRAINT user_email_key
    UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
  deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

INSERT INTO "user" (email, password, created_at, updated_at)
VALUES ('Haram', '$2a$10$lbz51SKx1ral2kNxXYRHLuOCHrG5jbCVM60XsnWs8dZavmCv5Iafq', NOW(), NOW());