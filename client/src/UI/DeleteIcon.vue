<template>
    <div class="delete-box">
        <button class="delete-box_btn">
            <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/96/808080/trash--v1.png"
            alt="trash"
          />
        </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.delete-box {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      &_btn {
        background: none;
        border: none;
        cursor: pointer;
      }
      &_btn:hover img {
        height: 30px;
        width: 30px;
      }
    }
</style>