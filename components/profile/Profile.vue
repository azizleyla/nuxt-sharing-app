<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex items-center justify-center">
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
          <foreignObject x="0" y="180" width="100%" height="32" rx="4"
            ><p class="text-center font-bold capitalize">
              {{ user.name }} {{ user.surname }}
            </p></foreignObject
          ><foreignObject x="0" y="208" width="100%" height="32" rx="4"
            ><p class="text-center text-xs">
              {{ user.email }}
            </p></foreignObject
          >
        </svg>
      </div>
      <div class="w-full md:w-1/2">
        <div class="bg-white rounded-lg p-6">
          <h3 class="font-bold text-2xl">Profile Details</h3>
          <p>Add your details to create a personal touch to your profile.</p>
          <div class="bg-[#fafafa] p-4 rounded-lg my-5">
            <form @submit.prevent="handleSubmit">
              <div
                class="flex flex-col sm:flex-row sm:items-center items-start justify-between"
              >
                <label class="text-[#897373]">First name*</label>
                <input
                  v-model="user.name"
                  class="bg-white border-[1px] outline-none rounded-lg h-12 px-4 w-full sm:w-[80%]"
                  placeholder="eg. Jonn"
                />
              </div>
              <div
                class="flex flex-col sm:flex-row sm:items-center items-start my-2 justify-between"
              >
                <label>Last name*</label>
                <input
                  v-model="user.surname"
                  class="bg-white border-[1px] outline-none rounded-lg h-12 px-4 w-full sm:w-[80%]"
                  placeholder="eg. Jonn"
                />
              </div>
              <div
                class="flex flex-col sm:flex-row sm:items-center items-start justify-between"
              >
                <label>Email*</label>
                <input
                  v-model="user.email"
                  class="bg-white border-[1px] outline-none rounded-lg h-12 px-4 w-full sm:w-[80%]"
                  type="email"
                  placeholder="eg. Jonn"
                />
              </div>
              <BaseSaveButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import store from "~/store/index";
const user = computed(() => store.state.user);
import { useToast } from "vue-toastification";
const toast = useToast();

onMounted(() => {
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  if (storedUser) {
    store.commit("saveUser", storedUser);
  }
});
const handleSubmit = () => {
  store.commit("saveUser", store.state.user);
  sessionStorage.setItem("user", JSON.stringify(store.state.user));
  toast.success("Your changes have been successfully saved!");
};

// import SaveButton from "~/components/common/SaveButton";
</script>
