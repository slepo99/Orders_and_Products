<template>
    <div>
        <ModalWindow :showModal="props.showModal">
          <div class="delete-box_window">
            <h2>Are you sure you want to delete order ?</h2>
            <div class="delete-box_window_btns">
              <button @click="removeOrder(currentOrderId)">Yes</button>
              <button @click="closeDialogWindow">No</button>
            </div>
          </div>
        </ModalWindow>
    </div>
</template>

<script setup lang="ts">
import ModalWindow from '@/UI/ModalWindow.vue';
import { useOrder } from "@/store/OrdersStore";
const order = useOrder();
const props = defineProps({
    currentOrderId: {
        type: String,
        required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
})
const emit = defineEmits()
function closeDialogWindow() {
 emit('closeDialogWindow')
}
async function removeOrder(id: string) {
  emit('closeDialogWindow')
  await order.deleteOrder(id);
  await order.getOrders();
}
</script>

<style lang="scss" scoped>
.delete-box_window {
        padding: 30px;
        &_btns {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 30px;
          button {
            width: 100px;
            height: 40px;
            cursor: pointer;
            background-color: black;
            border: none;
            border-radius: 6px;
            font-size: 18px;
          }
          button:hover {
            background-color: white;
            width: 110px;
            height: 45px;
            color: black;
          }
        }
      }
</style>