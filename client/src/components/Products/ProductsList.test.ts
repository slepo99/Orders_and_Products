import { render, screen, fireEvent } from '@testing-library/vue'
import ProductsList from './ProductsList.vue'
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
describe('Products List', () => {
  it('должен правильно рендерить компонент и взаимодействовать с ним', async () => {
    const productStore = {
      searchProducts: [
        {
          _id: '1',
          title: 'Product 1',
        },
      ],
    }

    const useOrderStoreMock = {
      orders: [
        {
          products: [
            { _id: '1', date: '2023-10-19' },
          ],
          title: 'Order 1',
        },
      ],
      getOrders: vi.fn(),
    }

    const { getByText, getByTestId, queryByText, queryByTestId } = render(ProductsList, {
      data() {
        return {
          productStore,
        }
      },
      global: {
        provide: {
          useOrderStore: useOrderStoreMock,
        },
      },
    })

   

     const title = getByText('Order 1')
    // expect(productTitle).toBeInTheDocument()
    // expect(orderDate).toBeInTheDocument()

   // fireEvent.click(productTitle)
    screen.debug
    //expect(useOrderStoreMock.getOrders).toBe
  })
})
