<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <q-uploader
          url="http://localhost:5000/upload"
          label="Загрузите изображение для шифрования фото"
          color="green"
          square
          flat
          bordered
          single
          @rejected="onRejected"
          @finish="onFinishUpload"
          @start="onStartUpload"
          style="min-width: 600px; max-width: 600px"
        />
      </q-card-section>

      <q-card-section>
        <q-img
          :src="url"
          spinner-color="white"
          style="height: 320px; max-width: 540px"
        />

      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PageIndex",
  setup() {
    const url = ref("");
    return {
      url,
      refresh() {
        url.value = "https://placeimg.com/500/300/nature?t=" + Math.random();
      },
    };
  },
  methods: {
    onFinishUpload() {
      setTimeout(() => {
        console.log("Weit!");
      }, 4000);
      this.url = "";
      this.url = "http://localhost:5000/static/stego.png";
      this.$forceUpdate();
    },
    onStartUpload() {
      this.url = "";
      this.$forceUpdate();
    },
  },
});
</script>
