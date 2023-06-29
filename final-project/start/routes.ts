/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import UsersController from "App/Controllers/Http/UsersController";
import ProfilesController from "App/Controllers/Http/ProfilesController";
import BukusController from "App/Controllers/Http/BukusController";
import PeminjamenController from "App/Controllers/Http/PeminjamenController";

const hUser = new UsersController();
const hProfile = new ProfilesController();
const hBuku = new BukusController();
const hPeminjaman = new PeminjamenController();

import Route from "@ioc:Adonis/Core/Route";
Route.group(() => {
  Route.resource("kategori", "KategorisController");

  Route.group(() => {
    Route.post("/", hPeminjaman.store).middleware("auth");
  }).prefix("/peminjaman");

  Route.group(() => {
    Route.post("/", hBuku.store).middleware("auth");
    Route.get("/", hBuku.index);
    Route.get("/:id", hBuku.show);
    Route.put("/:id", hBuku.update).middleware("auth");
    Route.delete("/:id", hBuku.destroy).middleware("auth");
  }).prefix("/buku");

  Route.group(() => {
    Route.post("/", hProfile.store).middleware("auth");
    Route.get("/", hProfile.show);
    Route.delete("/", hProfile.destroy).middleware("auth");
    Route.put("/", hProfile.update).middleware("auth");
  }).prefix("/profile");

  Route.group(() => {
    Route.post("/register", hUser.Register);
    Route.post("/login", hUser.Login);
  }).prefix("/auth");
}).prefix("/api/v1");

// Route.get("/", async () => {
//   return { hello: "world" };
// });
