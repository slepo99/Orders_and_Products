import ProductModel, { IProduct } from "../models/Product";

class ProductService {
  async create(product: Partial<IProduct>): Promise<IProduct> {
    try {
      const createdProduct = new ProductModel(product);
      await createdProduct.save();
      return createdProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Failed to create product.");
    }
  }

  async getAll(): Promise<IProduct[]> {
    try {
      const product = await ProductModel.find();
      return product;
    } catch (error) {
      console.error("Error getting product:", error);
      throw new Error("Failed to fetch product.");
    }
  }

  async getOne(id: string): Promise<IProduct | null> {
    try {
      if (!id) {
        throw new Error("ID undefined");
      }
      const product = await ProductModel.findById(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      console.error("Error getting product:", error);
      throw new Error("Failed to fetch product.");
    }
  }
}

export default new ProductService();
