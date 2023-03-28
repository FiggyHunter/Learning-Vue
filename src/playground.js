import { ref, computed, reactive, toRefs } from 'vue';

const person = reactive({
  name: 'Boris',
});

const { name } = toRefs(person);

const title = computed(() => name.value + ' the Great ');
console.log(title.value);

const titleLength = computed(() => {
  return title.value.length;
});
console.log(titleLength.value);

person.name = 'Leonardo';
console.log(title.value);
console.log(titleLength.value);
