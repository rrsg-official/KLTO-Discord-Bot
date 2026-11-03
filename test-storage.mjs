import { Client } from "@replit/object-storage";
import fs from "node:fs";

const client = new Client();

try {
  await client.init(
    "replit-objstore-eb18047a-9198-4c10-b9c0-5fa99e18fcee"
  );

  console.log("STORAGE CONNECTED");

  const { ok, value, error } = await client.list();

  if (!ok) {
    throw error;
  }

  console.log("Files found:", value.length);
  console.log(value.map(file => file.name));

  const download = await client.downloadToFilename(
    "Con las Crocs.mp3",
    "/tmp/music-test.mp3"
  );

  if (!download.ok) {
    throw download.error;
  }

  const stats = fs.statSync("/tmp/music-test.mp3");

  console.log("DOWNLOAD SUCCESSFUL");
  console.log("File size:", stats.size, "bytes");
  console.log("MP3 exists:", stats.size > 0);

} catch (error) {
  console.error("TEST FAILED:", error);
  process.exitCode = 1;
}
