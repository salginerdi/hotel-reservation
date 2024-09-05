# HotelApp
# Otel Rezervasyon Uygulaması

Bu proje, Angular tabanlı bir otel rezervasyon uygulamasıdır. Kullanıcılar bu uygulama ile rezervasyon oluşturabilir, mevcut rezervasyonları görüntüleyebilir, güncelleyebilir ve silebilir. Uygulama, backend API ile iletişim kurarak verileri çeker.

## Özellikler

- **Rezervasyon Oluşturma**: Kullanıcılar yeni rezervasyonlar oluşturabilir.
- **Rezervasyon Listeleme**: Tüm rezervasyonları listeleyebilir.
- **Rezervasyon Güncelleme**: Mevcut rezervasyonları düzenleyebilir.
- **Rezervasyon Silme**: Rezervasyonları sistemden kaldırabilir.

## Teknoloji Yığını

- **Frontend**: Angular (Sürüm 18)
- **Backend**: Mockoon programı ile ile Mock Api'lar kullanılmıştır.
- **Veritabanı**: Veritabanı mevcut değildir.
- **Araçlar**:
  - Angular CLI
  - TypeScript
  - HTML5 & CSS3

## Kurulum

1. **Projeyi klonlayın**:
    ```bash
    git clone https://github.com/kullanici-adi/otel-rezervasyon-uygulamasi.git
    cd otel-rezervasyon-uygulamasi
    ```

2. **Bağımlılıkları yükleyin**:
    ```bash
    npm install
    ```

3. **Uygulamayı çalıştırın**:
    ```bash
    ng serve
    ```

   Uygulama `http://localhost:4200` adresinde çalışacaktır.

## Kullanım

- Yeni bir rezervasyon oluşturmak için formu doldurun ve gönderin.
- Mevcut rezervasyonlar, liste üzerinden güncellenebilir veya silinebilir.

## API EndPointleri

- `GET /reservations` - Tüm rezervasyonları getirir
- `POST /reservations` - Yeni rezervasyon oluşturur
- `PUT /reservations/:id` - Mevcut bir rezervasyonu günceller
- `DELETE /reservations/:id` - Bir rezervasyonu siler

## Nasıl Çalışır?

- Uygulama, rezervasyon işlemlerini gerçekleştiren bir backend servisi ile iletişim kurar.
- Kullanıcılar, rezervasyon oluşturmak veya düzenlemek için formu kullanabilir.
- Veriler, Angular servisleri aracılığıyla backend'den çekilir ve anlık olarak görüntülenir.

------------------------------------------------
# Hotel Reservation Application

This project is an Angular-based hotel reservation application. Users can create, view, update, and delete reservations through this application. The application fetches data by communicating with the backend API.

## Features

- **Create Reservation**: Users can create new reservations.
- **List Reservations**: View all existing reservations.
- **Update Reservation**: Modify existing reservations.
- **Delete Reservation**: Remove reservations from the system.

## Tech Stack

- **Frontend**: Angular (Version 18)
- **Backend**: Mock APIs were used with Mockoon.
- **Database**: No database is used.
- **Tools**:
  - Angular CLI
  - TypeScript
  - HTML5 & CSS3

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/username/hotel-reservation-app.git
    cd hotel-reservation-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

   The app will run at `http://localhost:4200`.

## Usage

- To create a new reservation, fill out the form and submit.
- Existing reservations can be updated or deleted from the list.

## API Endpoints

- `GET /reservations` - Retrieve all reservations
- `POST /reservations` - Create a new reservation
- `PUT /reservations/:id` - Update an existing reservation
- `DELETE /reservations/:id` - Delete a reservation

## How It Works

- The application communicates with a backend service to handle reservation actions.
- Users can use the form to create or edit reservations.
- Data is fetched from the backend via Angular services and displayed in real-time.


---------------------------------------------------------------------------------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
