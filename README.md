# Armert NestJS DTO Package 🚀

### 🇹🇷 TANRI TÜRK'Ü KORUSUN VE YÜCELTSİN 🐺

[![NPM Version](https://img.shields.io/npm/v/armert-dto-for-nestjs?style=flat-square&color=blue)](https://www.npmjs.com/package/armert-dto-for-nestjs)
[![License](https://img.shields.io/npm/l/armert-dto-for-nestjs?style=flat-square&color=red)](https://github.com/armert/armert-dto-for-nestjs/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/armert-dto-for-nestjs?style=flat-square)](https://www.npmjs.com/package/armert-dto-for-nestjs)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0+-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)

---

## 📖 Overview

**Armert DTO** is an enterprise-grade, strict, and modular Data Transfer Object (DTO) library designed specifically for scalable **NestJS** applications. It abstracts standard e-commerce patterns into reusable, validated, and type-safe classes, ensuring your backend is robust from day one.

Unlike simple DTO collections, this package implements **Domain-Driven Design (DDD)** principles, strictly validating business rules at the transport layer (e.g., verifying that a product cannot have both 'Limited Stock' type and 'Unlimited' quantity simultaneously).

## ✨ Key Features

- **🛡️ Strict Type Safety**: Full TypeScript support with `class-validator` integration.
- **🧠 Domain Logic Validation**: Custom decorators to validate complex business rules cross-fields.
- **🌍 Internationalization Ready**: Built-in `LocalizedTextDTO` for multi-language support.
- **🏗️ Modular Architecture**: Decoupled modules for `Auth`, `Product`, `Order`, `Cart`, and `Payment`.
- **🚀 Production Ready**: Includes standard `Pagination`, `API Response`, and `Base Entity` structures.

## 📦 Installation

Install the package alongside its peer dependencies:

```bash
npm install armert-dto-for-nestjs class-validator class-transformer @nestjs/mapped-types @nestjs/swagger
```

## 🛠️ Usage Guide

### 1. Authentication & User Management

Streamline your auth controller with pre-validated DTOs.

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, AuthResponseDTO } from 'armert-dto-for-nestjs';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() payload: LoginDTO): Promise<AuthResponseDTO> {
    // payload.email -> validated as email
    // payload.password -> validated for complexity
    return this.authService.validateUser(payload);
  }
}
```

### 2. Advanced Product Validation

The package prevents invalid states before they reach your business logic.

```typescript
import { CreateProductDTO, StockType } from 'armert-dto-for-nestjs';

const product = new CreateProductDTO();

// ❌ Error: Discount price cannot be higher than the regular price.
product.price = 100;
product.discountPrice = 150; 

// ❌ Error: Stocks cannot be defined if the product creates explicit variants.
product.variants = [{ sku: 'V1', price: 10, stock: 5 }];
product.stock = 100;

// ✅ Success: Valid product structure
product.stockType = StockType.LIMITED;
product.stock = 50; 
```

### 3. Order & Checkout Flow

Standardize your order processing with rigid Enums and nested object validation.

```typescript
import { CreateOrderDTO, PaymentMethod } from 'armert-dto-for-nestjs';

// Automatically validates addresses UUIDs and Payment Method enums
const orderData: CreateOrderDTO = {
  shippingAddressId: 'uuid-1',
  billingAddressId: 'uuid-2',
  paymentMethod: PaymentMethod.CREDIT_CARD,
  items: [...]
};
```

### 4. Pagination & filtering

Easily implement standardized pagination in your controllers.

```typescript
// Controller
import { PaginationQueryDTO, PaginatedResponseDTO } from 'armert-dto-for-nestjs';

@Get()
async getAll(@Query() query: PaginationQueryDTO): Promise<PaginatedResponseDTO<UserDTO>> {
   // query.page, query.limit, query.sortBy are automatically parsed & validated.
   return this.userService.findAll(query);
}
```

## 📂 Module Structure

| Module | Description |
| :--- | :--- |
| **Common** | `PaginatedResponse`, `ApiError`, `BaseEntity` |
| **User** | `Auth`, `Profile`, `Role Management` |
| **Product** | `SEO`, `Variants`, `Attributes`, `Stock Logic` |
| **Order** | `Checkout`, `Status Workflow`, `Shipment` |
| **Cart** | `Basket Operations`, `Coupons` |
| **Review** | `Ratings`, `Comments`, `Moderation` |
| **Payment** | `Provider Integration`, `3D Secure Handling` |

## 🤝 Contribution & Development

We love contributions! This project is open for any kind of improvement. Whether you want to add new DTOs, improve validation logic, or fix bugs, your help is welcome.

**How to contribute:**

1.  **Fork** the repository.
2.  **Clone** your fork to your local machine:
    ```bash
    git clone https://github.com/MertcanMert/armert-dto-for-nestjs.git
    ```
3.  **Create a new branch** for your feature or fix:
    ```bash
    git checkout -b feature/amazing-feature
    ```
4.  **Make your changes** and commit them:
    ```bash
    git commit -m 'feat: Add amazing feature'
    ```
5.  **Push** to your branch:
    ```bash
    git push origin feature/amazing-feature
    ```
6.  **Open a Pull Request** against the `main` branch.

### Suggestions?
If you have an idea but don't know how to implement it, feel free to open a [Discussion](https://github.com/armert/armert-dto-for-nestjs/discussions) or an [Issue](https://github.com/armert/armert-dto-for-nestjs/issues). We are actively looking for feedback to make this the standard DTO library for NestJS e-commerce projects.

## 📝 License

Distributed under the **ISC** License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ by <b>Armert</b></sub>
</div>
