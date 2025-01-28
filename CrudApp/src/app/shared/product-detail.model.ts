export class ProductDetail {
  id: string=""; // Corresponds to Guid in C#
  name!: string; // PascalCase converted to camelCase (e.g., from "ProductName" to "productName")
  description!: string; // PascalCase converted to camelCase
  price!: string; // Same name as in C#
  stockQuantity!: number; // PascalCase converted to camelCase
}
