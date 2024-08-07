-- CreateTable
CREATE TABLE "hunts" (
    "id" UUID NOT NULL,
    "username" VARCHAR(255),
    "dexnum" INTEGER NOT NULL,
    "encounters" INTEGER NOT NULL,
    "ongoing" BOOLEAN NOT NULL,
    "game" VARCHAR(255) NOT NULL,
    "method" VARCHAR(255) NOT NULL,

    CONSTRAINT "hunts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created" TIMESTAMP(6) NOT NULL,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "hunts" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE SET NULL ON UPDATE NO ACTION;

