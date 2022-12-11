import CreateProductUseCase from "./create.product.usecase"

const input = {

}

const MockRepository = () => {
    return {
        create: jest.fn(),
    }
}

describe("Unit test create product use case", () => {
    it("should create a product", async () => {
        const productRepository = MockRepository()
        const productCreateUseCase = new CreateProductUseCase(productRepository)

    })
})