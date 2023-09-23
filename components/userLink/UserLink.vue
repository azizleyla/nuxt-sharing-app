<template>
  <div class="container mx-auto">
    <div class="flex gap-5 flex-col-reverse sm:flex-row">
      <div class="flex items-center justify-center sm:w-1/2 w-full text-center">
        <svg width="308" height="632" fill="none" viewBox="0 0 308 632">
          <path
            stroke="#737373"
            d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
          ></path>
          <path
            fill="#fff"
            stroke="#737373"
            d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
          ></path>
          <circle cx="153.5" cy="112" r="48" fill="#EEE"></circle>

          <foreignObject
            v-for="(link, index) in links"
            :key="link.id"
            width="100%"
            height="44"
            x="0"
            :y="220 + index * 70"
            rx="4"
          >
            <a
              :href="link.url"
              class="bg-[#eee] flex justify-between items-center rounded-lg px-4 gap-x-2 text-left text-white mx-auto h-[44px] w-[237px]"
              target="_blank"
              rel="noopener noreferrer"
              :style="`background-color: ${colors[link.title]}`"
            >
              <p>{{ link.title }}</p>
              <Icon name="maki:arrow" color="white" /> </a
          ></foreignObject>
        </svg>
      </div>
      <div class="sm:w-1/2 w-full bg-white px-6 py-3 rounded-md">
        <h3 class="font-bold text-2xl">Customize your links</h3>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world
        </p>

        <button
          @click="handleClick"
          class="hover:bg-[#EFEBFF] flex items-center gap-1 justify-center font-semibold border-[#633cff] border-[1px] w-full my-5 rounded-md p-2 px-5 text-[#633cff]"
        >
          <Icon name="ic:round-plus" />
          Add New Link
        </button>

        <div class="bg-gray">
          <form @submit.prevent="saveLS">
            <div
              v-for="(link, index) in links"
              :key="link.id"
              class="mb-5 bg-[#FAFAFA] p-3 px-5 rounded-2xl"
            >
              <div class="flex justify-between">
                <h2 class="font-bold text-[#737373]">Link #{{ index + 1 }}</h2>
                <button
                  @click="handleDelete(link.id)"
                  class="flex ml-auto text-[#737373]"
                >
                  Remove
                </button>
              </div>

              <div class="my-3">
                <label class="mb-2 text-[12px]">Platform</label>
                <select
                  v-model="link.title"
                  class="w-full border-[1px] p-2 rounded-md outline-none"
                >
                  <option value="github">Github</option>
                  <option value="linkedin">Linkedin</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                </select>
              </div>

              <div>
                <label class="mb-2 text-[12px]">Link</label>
                <input
                  v-model="link.url"
                  class="w-full border-[1px] p-2 rounded-md outline-none"
                  placeholder="Enter link"
                />
              </div>
            </div>
            <BaseSaveButton>Save</BaseSaveButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "~/store";

const colors = {
  github: "#1a1a1a",
  linkedin: "#2D68FF",
  twitter: "#43B7E9",
  facebook: "#2442AC",
};
const links = computed(() => store.state.links);

const saveLS = () => {
  sessionStorage.setItem("links", JSON.stringify(store.state.links));
};

const handleClick = () => {
  const newLink = {
    id: crypto.randomUUID(),
  };
  store.commit("saveLinks", newLink);
};

onMounted(() => {
  const storedLinks = JSON.parse(sessionStorage.getItem("links"));
  if (storedLinks) {
    store.commit("setLinks", storedLinks);
  }
});

const handleDelete = (linkId) => {
  store.commit("deleteLink", linkId);
  saveLS();
};
</script>
