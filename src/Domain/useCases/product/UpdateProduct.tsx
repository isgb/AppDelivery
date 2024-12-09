import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";

const {update} = new ProductRepositoryImpl();

import { Product } from "../../entities/Product";

const UpdateProductUseCase = async (product: Product) => {
  return await update(product)
}

export default UpdateProductUseCase