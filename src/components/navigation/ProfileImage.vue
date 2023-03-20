<template>
  <div class="grid place-items-center">
    <img class="h-9 w-9 rounded-3xl object-cover" :src="imageLink" alt="User Profile Image" />
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://media.istockphoto.com/id/1202429977/photo/police-car-emergency-services.jpg?b=1&s=170667a&w=0&k=20&c=FpFxnzE5xdNQ3W_p1RNeVva5fMlMX3C_v3LCe5tRdck=',
    };
  },
};
</script>
