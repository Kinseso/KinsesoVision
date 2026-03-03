/*
  Warnings:

  - You are about to drop the column `deviceName` on the `Camera` table. All the data in the column will be lost.
  - You are about to drop the column `aiDetected` on the `CloudBackup` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `CloudBackup` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Post` table. All the data in the column will be lost.
  - Added the required column `name` to the `Camera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `CloudBackup` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FriendRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Camera" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ONLINE',
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Camera_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Camera" ("id", "ownerId", "status") SELECT "id", "ownerId", "status" FROM "Camera";
DROP TABLE "Camera";
ALTER TABLE "new_Camera" RENAME TO "Camera";
CREATE TABLE "new_CloudBackup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "size" TEXT NOT NULL,
    "cameraId" TEXT NOT NULL,
    CONSTRAINT "CloudBackup_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CloudBackup" ("cameraId", "id", "timestamp") SELECT "cameraId", "id", "timestamp" FROM "CloudBackup";
DROP TABLE "CloudBackup";
ALTER TABLE "new_CloudBackup" RENAME TO "CloudBackup";
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content", "createdAt", "id") SELECT "authorId", "content", "createdAt", "id" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
